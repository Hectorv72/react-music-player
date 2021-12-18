/* eslint-disable no-unused-vars */
import Deezer from '../apis/Deezer'
import CorsAnywhere from '../apis/CorsAnywhere'
import MusicItem from './MusicItem'
import MusicList from './MusicList'
import { useState } from 'react'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const Searcher = () => {
  const [list, setList] = useState([])
  const [music, setMusic] = useState('')

  const handlePlayMusic = (link) => {
    setMusic(link)
  }

  const handleSearchArtist = async (e) => {
    e.preventDefault()
    const content = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const { value } = e.target[0]
    setList([])
    setMusic('')
    const response = await fetch(`${CorsAnywhere}/${Deezer}/search/track?q=${value}`, content)
    if (response.ok) {
      const json = await response.json()
      const newList = json.data.map((music, key) =>
        <MusicItem key={'music-' + key} music={music} handlePlay={handlePlayMusic} />
      )
      setList(newList)
    }
  }

  return (
    <div>
      <form onSubmit={handleSearchArtist}>
        <input className='form-control text-center' type="search" />
      </form>
      <div className="pt-3">

        {
          list.length > 0 &&
          <div style={{ overflowY: 'scroll', height: '70vh' }}>
            <MusicList musics={list} />
          </div>
        }
      </div>
      {
        list.length > 0 &&
        <AudioPlayer
          autoPlay
          src={music}
        // onPlay={e => console.log('onPlay')}
        />
      }
    </div>
  )
}

export default Searcher
