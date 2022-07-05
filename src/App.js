import { useEffect, useState } from 'react'
import { Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from './Pages/Home/Home';
import Show from './Pages/Show/Show';
import Results from './Pages/Results/Results';
import Actor from './Pages/Actor/Actor'

function App() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchShows() {
     for (let i = 0; i < 251; i++) {
      const res = await fetch(`https://api.tvmaze.com/shows?page=${i}`)
      const data = await res.json()
      setShows(prev => [...prev, ...data])
      setLoading(false)
    }
  }
    
    useEffect(() => {
      fetchShows()
    }, [])

  

  return (
    loading ? <h1 className='loading'>Loading...</h1> :
    <> 
        <Nav/>
        <Routes>
          <Route path='/' element={<Home shows={shows}/>}/>
          <Route path='/show/:id' element={<Show />}/>
          <Route path='/search/:value' element={<Results />}/>
          <Route path='/actor/:id' element={<Actor />}/>
        </Routes>

    </> 
  );
}

export default App;
