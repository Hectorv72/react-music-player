/* eslint-disable react/prop-types */
const AlbumListGroup = ({ musics }) => {
  return (
    <div >
      <ul className="list-group list-group-flush">
        {musics}
      </ul>
    </div>
  )
}

export default AlbumListGroup
