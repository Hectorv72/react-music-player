/* eslint-disable no-unused-vars */
// import { useState } from 'react'

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
// import './style.css'
const Album = ({ data, handlePlay }) => {
  const { album, preview } = data
  const { cover, title } = album
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSjnxC8A8V_VFI2nWhkpU1NOhWfdHUfYD2-CCYofyojg7qysv1InviQJ65nKbzUP6XqA&usqp=CAU')

  const handleLoadImage = () => {
    const img = new Image()
    img.src = cover
    img.onload = () => {
      const { src } = img
      setImage(src)
    }
  }

  useEffect(() => {
    handleLoadImage()
  }, [])

  return (
    <div>
      {/* <div className="d-flex flex-column bd-highlight d-none d-sm-block" >
        <div className="bd-highlight d-flex justify-content-center ">
          <img onClick={() => handlePlay(preview)} src={image} className="album-image" style={{ width: '50%' }} />
        </div>
        <div className="bd-highlight">
          <p className="text-center">{title}</p>
        </div>
      </div > */}
    </div>
  )
}

export default Album
