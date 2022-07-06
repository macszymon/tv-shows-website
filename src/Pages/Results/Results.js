import React, { useEffect, useState } from 'react'
import './Results.css'
import {useParams} from 'react-router-dom'
import Card from '../../Components/Card/Card'

function Results() {
  const {value} = useParams()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchResults() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=' + value)
    const data = await res.json()
    setResults(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchResults()
  }, [value])
  

  return (
    <main className='results'>
      <h1 className='results__header'>{results.length > 0 ? `Results for ${value}` : `No Results for ${value}`}</h1>
      <div className="results__container">
      {loading ? <h1 className='loading'>Loading...</h1> : results.map(item => <Card key={item.show.id} show={item.show} />)}
      </div>
    </main>
  )
}

export default Results