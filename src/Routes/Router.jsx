import { createBrowserRouter } from 'react-router-dom'
import Character from '../pages/Character'
import CharactersList from '../pages/CharactersList'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersList></CharactersList>
  },
  {
    path: '/:id',
    element: <Character></Character>
  }
])
