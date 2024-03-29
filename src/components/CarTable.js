import React, { useState, useEffect } from 'react'
import AddCarForm from '../components/AddCarForm';
import UpdateCarForm from '../components/UpdateCarForm';
import { Modal, Button, Typography } from 'antd'
import CarCard from './CarCard';



const apiUrl = 'https://carcollectionbackend.onrender.com'
const apiUrl2 = 'http://localhost:5000'



const CarTable = () => {

    console.log(`API URL: ${apiUrl2}`)

    // MUI Card & Original CarTable Function
    const [cars, setCars] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    // Fetch Cars MONGODB Data from Express API
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch(`${apiUrl}/dashboard`);
                const data = await response.json();
                setCars(data);
                console.log('Fetched Cars', data)
            } catch (error) {
                console.error('Error fetching cars: ', error);
            }
        };
        fetchCars();
    }, []);

//

    // Ability to Add A Car to DB From Dashboard with the Car Table
    const handleAddCar = async (newCar) => {
        try {
            const response = await fetch(`${apiUrl}/dashboard`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCar),
            });
            if (!response.ok) {
                throw new Error('Failed to add car');
            }
            const createdCar = await response.json();
            setCars([...cars, createdCar]);
            setIsModalVisible(false);
            setSelectedCar(null)
        } catch (error) {
            console.error('Error adding car: ', error)
        }
    };

    // Ability to Update A Car to DB From Dashboard with the Car Table
    const handleUpdateCar = async (carId, updatedCar) => {
        try {
            if (!carId) {
                console.error('Invalid carId:', carId);
            }
            const response = await fetch(`${apiUrl}/dashboard/${carId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCar),
            });

            if (!response.ok) {
                throw new Error('Failed to update car');
            }
            const editedCar = await response.json();
            const updatedCars = cars.map((car) => car._id === carId ? { ...car, editedCar } : car);

            setCars(updatedCars);
            setIsModalVisible(false);
            setSelectedCar(null);
            window.location.reload();

        } catch (error) {
            console.error('Error updating car: ', error)
        }
    };


    // Ability to Delete A Car to DB From Dashboard with the Car Table
    const handleDeleteCar = async (carId) => {
        try {
            if (!carId) {
                console.error('Invalid carId:', carId);
            }
            const response = await fetch(`${apiUrl}/dashboard/${carId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete car');
            }
            console.log('Deleting Car:', carId);
            const updatedCars = cars.filter((car) => car._id !== carId);

            setCars(updatedCars);
            setIsModalVisible(false);
            setSelectedCar(updatedCars);
        } catch (error) {
            console.error('Error deleting car: ', error);
        }
    };

    const { Title } = Typography;
    return (
        <div className="container">

            {/* ANT Design*/}
            <Title className='flex justify-center items-center text-sky-50 my-9 ' level={3}>All Cars at our platform</Title>
            <div className='flex justify-center items-center text-sky-50 text-center mx-9 my-9'>
            <Button className='text-sky-50 text-center mx-9' onClick={() => setIsModalVisible(true)}>
                {selectedCar ? 'Edit Car' : 'Add Car'}
            </Button>
            </div>
            {/* Modal */}
            <Modal
                title={selectedCar ? 'Edit Car' : 'Add Car'}
                open={isModalVisible}
                onCancel={() => {
                    setIsModalVisible(false);
                    setSelectedCar(null);
                }}
                footer={null}
            >

                {/* Conditionally render AddCarForm or UpdateCarForm based on selectedCar */}
                {selectedCar ? (
                    <UpdateCarForm onSubmit={handleUpdateCar} initialData={selectedCar} carId={selectedCar._id} />
                ) : (
                    <AddCarForm onSubmit={handleAddCar} />
                )
                }

            </Modal>
            <div  className="flex items-center justify-center">
            {/*Car Cards in a table - MUI Card */}
  
            <CarCard
            className="max-w-md mx-auto"
             cars={cars}
            //  onEdit={handleUpdateCar}
             onEdit={(car) => {
                setSelectedCar(car);
                setIsModalVisible(true);
            }} 
            // onDelete={handleDeleteCar}
                onDelete={(car) => {
                if (window.confirm(`Are you sure you want to delete ${car.make} ${car.model}?` )) {
                  setSelectedCar(car);
                  handleDeleteCar(car._id);
                }
              }} 
            />

        </div>
        </div>
    )
            };
export default CarTable;