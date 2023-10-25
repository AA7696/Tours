import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tours from './Tours';
import './App.css'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };


  const fetchData = async () => {

    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
  
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    
  }

  useEffect(() =>{
    fetchData();
  }, [])
  

  if(loading){
    return(
      <div className="load-container">
        <Loading />
      </div>
    )
  }
  return (
    <main>
      <Tours tours = {tours} removeTour={removeTour} />
    </main>
  )
}

export default App
