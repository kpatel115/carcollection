import React, { useState, useEffect } from 'react'
import AddCarForm from '../components/AddCarForm';
import UpdateCarForm from '../components/UpdateCarForm';
import { Modal, Button, Title, Typography } from 'antd'
import CarCard from './CarCard';



const CarTable = () => {


    // MUI Card & Original CarTable Function
    const [cars, setCars] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    // Fetch Cars MONGODB Data from Express API
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:5000/dashboard');
                const data = await response.json();
                setCars(data);
                console.log('Fetched Cars', data)
            } catch (error) {
                console.error('Error fetching cars: ', error);
            }
        };
        fetchCars();
    }, []);


    // Ability to Add A Car to DB From Dashboard with the Car Table
    const handleAddCar = async (newCar) => {
        try {
            const response = await fetch('http://localhost:5000/dashboard', {
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
            const response = await fetch(`http://localhost:5000/dashboard/${carId}`, {
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
            const response = await fetch(`http://localhost:5000/dashboard/${carId}`, {
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* ANT Design*/}
            <Title level={3}>All Cars at our plateform</Title>
            <Button onClick={() => setIsModalVisible(true)}>
                {selectedCar ? 'Edit Car' : 'Add Car'}
            </Button>
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



            {/*Car Cards in a table - MUI Card */}

            <CarCard
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
    )
};

export default CarTable