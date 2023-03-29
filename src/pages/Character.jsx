import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import './Character.css'

function Character() {

  const {id} = useParams()

  const {data, loading, error} = useCharacter(id)

  console.log(data)
  
  if (error) {
    return <div>
      Something is wrong
    </div>
  }

  if (loading) {
    return <h4>Loading...</h4>
  }

  return <div className='Character'>
    <img src={data.character.image} width={"750px"} height={'750px'} alt="" />
    <div className='Character-content'>
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div className='Character-episode'>
        {data.character.episode.map(epi => <div key={epi.episode}>
          {epi.name} - <b>{ epi.episode }</b>
        </div>)}
      </div>
    </div>
  </div>
}

export default Character
