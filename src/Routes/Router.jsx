import { createBrowserRouter } from 'react-router-dom'
import Character from '../pages/Character'
import CharactersList from '../pages/CharactersList'
import Search from '../pages/Search'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersList></CharactersList>
  },
  {
    path: '/:id',
    element: <Character></Character>
  },
  {
    path: '/search',
    element: <Search></Search>
  }
])
