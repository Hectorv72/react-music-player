import { useState, useContext } from 'react'
import Deezer from '../apis/Deezer'
import CorsAnywhere from '../apis/CorsAnywhere'
import { MusicItem, MusicList, Searcher } from '../components'
import { MusicTrack } from '../contexts'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const MusicPlayer = () => {
  const [list, setList] = useState([])
  const [music, setMusic] = useContext(MusicTrack)

  const handleSearchArtist = async (value) => {
    const content = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      }
    }
    setList([])
    setMusic('')
    const response = await fetch(`${CorsAnywhere}/${Deezer}/search/track?q=${value}`, content)
    if (response.ok) {
      const json = await response.json()
      const newList = json.data.map((music, key) =>
        <MusicItem key={'music-' + key} music={music} />
      )
      setList(newList)
    }
  }

  return (
    <div>
      <Searcher handle={handleSearchArtist} />
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

export default MusicPlayer
