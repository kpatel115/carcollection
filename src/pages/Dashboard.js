import CarTable from '../components/CarTable';

function Dashboard() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background3.jpg')"}} >
      <CarTable className="flex items-center justify-center" />
    </div>
  )
}

export default Dashboard