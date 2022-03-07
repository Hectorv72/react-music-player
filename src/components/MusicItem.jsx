/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react'
import { MusicTrack } from '../contexts'

const MusicItem = ({ music }) => {
  const { album, title, artist, preview } = music // , artist, title, preview
  const { cover } = album
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSjnxC8A8V_VFI2nWhkpU1NOhWfdHUfYD2-CCYofyojg7qysv1InviQJ65nKbzUP6XqA&usqp=CAU')
  // const [active, setActive] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [play, setPlay] = useContext(MusicTrack)

  const handleLoadImage = () => {
    const img = new Image()
    img.src = cover
    img.onload = () => {
      const { src } = img
      setImage(src)
    }
  }

  const handlePlayMusic = () => {
    setPlay(preview)
  }

  useEffect(() => {
    handleLoadImage()
  }, [])

  useEffect(() => {
    if (play === preview) {
      setPlaying(true)
    } else {
      setPlaying(false)
    }
  }, [play])

  return (
    <li onClick={handlePlayMusic} className={`btn list-group-item list-group-item-action ${playing ? 'bg-primary' : ''}`}>
      <div className="row">
        <div className="col-3 col-sm-2 col-md-2 col-lg-1">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img className="img-fluid" src={image} alt={title} />
          </div>
        </div>
        <div className="col-9 col-sm-10 col-md-10 col-lg-11">
          <h5>{title}</h5>
          <p>{album.title}</p>
          <strong>Artist: {artist.name}</strong>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
