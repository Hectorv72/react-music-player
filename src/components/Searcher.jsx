/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Searcher = ({ handle }) => {
  const [search, setSearch] = useState('')

  const handleSetSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    handle(search)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={search} onChange={handleSetSearch} className='form-control text-center' type="search" />
      </form>
    </div>
  )
}

export default Searcher
