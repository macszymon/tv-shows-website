import React from 'react'
import './Error.css'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <Link to='/'>Back Home</Link>
    </div>
  )
}

export default Error