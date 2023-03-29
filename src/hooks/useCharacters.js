import { gql, useQuery } from '@apollo/client'

const GET_CHARCTERS = gql`
query {
    characters{
      results{
        id
      name
        image
      }
    }
  }
`

export const useCharacters = () => {
    const {data, loading, error} = useQuery(GET_CHARCTERS)

    return{
        data, 
        loading,
        error}
}