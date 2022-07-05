import React, { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './Gallery.css'

function Gallery({images}) {
  const [openImage, setOpenImage] = useState('')

  return (
    <section className='gallery'>
      {images.map(item => <img className='gallery__img' key={item.id} onClick={() => setOpenImage(item.resolutions.original.url)} src={item.resolutions.original.url}/> )}
      {openImage !== '' && <div className='galley__img-open'><AiOutlineCloseCircle className='gallery__close' onClick={() => setOpenImage('')}/><img src={openImage}/></div>}
    </section>
  )
}

export default Gallery