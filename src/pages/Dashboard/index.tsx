import * as S from './styles'
import Button from '../../components/DataEntry/Button'
import Input from '../../components/DataEntry/Input'
import PostCards from '../../components/PostCard'
import { useState } from 'react'
import api from '../../services/api'
import Balls from '../../components/Balls'

interface IPokemonValues {
  id: string
  name: string
  weight: string
  sprites: {
    front_default: string
  }
}

const Dashboard = () => {
  const [typedPokemon, setTypedPokemon] = useState('')
  const [pokemon, setPokemon] = useState<IPokemonValues>()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`)
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
        {pokemon && (
          <PostCards
            pokemonName={pokemon.name}
            pokemonId={pokemon.id}
            pokemonWeight={pokemon.weight}
            pokemonImage={pokemon.sprites.front_default}
          />
        )}
      </S.Container>
      <Balls />
    </S.Wrapper>
  )
}

export default Dashboard
