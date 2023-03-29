
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'
import './CharacterList.css'



function CharactersList() {

    const {data, error, loading} = useCharacters()
    const navigate = useNavigate()
    

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <div>Somthing is wrong</div>
    }

    

  return (
    <div className='CharacterList'>
      {
        data.characters.results.map(character => <Link to={`${character.id}`} key={character.id}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
        </Link>)
      }
    </div>
  )
}

export default CharactersList
