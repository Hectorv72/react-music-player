/* eslint-disable react/prop-types */
const AlbumList = ({ albums }) => {
  return (
    <div className="container">
      <div className="row">
        {
          albums.map((album, key) =>
            <div key={'element-album-' + key} className="col-6 col-md-3">
              {album}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default AlbumList
