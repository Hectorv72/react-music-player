/* eslint-disable no-unused-vars */
import { Route, Routes, Navigate } from 'react-router-dom'
import { MusicPlayer } from '../pages'
import { MusicTrack } from '../contexts'
import { useState } from 'react'

const Routing = () => {
  const [music, setMusic] = useState('')
  return (
    <>
      <MusicTrack.Provider value={[music, setMusic]} >
        <Routes>
          <Route path="/" >
            <Route path="track" element={<MusicPlayer />} />
            {/* <Route element={<Navbar />}>
            <Route path="searcher" element={<Searcher />} />
          </Route> */}
            {/* <Route path="*" element={<Page404 />} /> */}
            {/* <Route path="/" element={<Navigate to="/track" />} /> */}
          </Route>
        </Routes>
      </MusicTrack.Provider>
    </>
  )
}

export default Routing
