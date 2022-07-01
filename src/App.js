import { useEffect, useState } from 'react'
import Nav from "./Components/Nav/Nav";
import Hero from './Components/Hero/Hero'
import Trending from './Components/Trending/Trending';
import ComingSoon from './Components/ComingSoon/ComingSoon';

function App() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchShows() {
    //   const res = await fetch(`https://api.tvmaze.com/shows?page=0`)
    //   const data = await res.json()
    //   setShows(data)
    //   setLoading(false)
    
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
    loading ? <h1>Loading...</h1> :
    <div> 
        <Nav/>
        <Hero />
        <Trending trendingShows={shows.filter(item => item.weight >= 100 && item.status === 'Running')} />
        <ComingSoon comingShows={shows.filter(item => item.weight >= 98 && item.status === 'In Development')} />
    </div> 
  );
}

export default App;
