import * as S from './styles'
import Button from '../../components/DataEntry/Button'
import Input from '../../components/DataEntry/Input'
import PostCards from '../../components/PostCard'
import { useState } from 'react'
import api from '../../services/api'

const Dashboard = () => {
  const [typedPokemon, setTypedPokemon] = useState('')
  const [pokemon, setPokemon] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`)
      console.log(response.data)
      setPokemon(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.WelcomeText>Welcome to Pokedex!</S.WelcomeText>
        <S.DataWrapper>
          <Input
            onChange={(e) => setTypedPokemon(e.target.value.toLowerCase())}
            placeholder="Type a pokemon"
          />
          <Button onClick={handleClick}>
            {isLoading ? <S.Loader size="1rem" color="white" /> : 'Search'}
          </Button>
        </S.DataWrapper>
        {pokemon && <PostCards />}
      </S.Container>
    </S.Wrapper>
  )
}

export default Dashboard
