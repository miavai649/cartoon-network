import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATION = gql`
   query GetCharacterLocations($name: String!){
    characters
   }
`

function Search() {

    const [name, setName] = useState('')
    const [getLocation, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name
        }
    })

    console.log({
        called,
        loading, 
        error,
        data
    })

  return (
    <div>
      <input type="text" value={name}  onChange={e => setName(e.target.value)} />
      <button onClick={()=> getLocation()}>Search</button>
    </div>
  )
}

export default Search
