import * as S from './styles'

interface IPostCards {
  pokemonName?: string
  pokemonId?: React.FC
  pokemonType?: React.FC
}

const PostCards = ({ pokemonName, pokemonId, pokemonType }: IPostCards) => {
  return (
    <S.Wrapper>
      <S.PokemonName>{pokemonName}</S.PokemonName>
      <S.PokemonSprite />
      <S.LeftInformation>
        ID
        <S.PokemonInformation>{pokemonId}</S.PokemonInformation>
      </S.LeftInformation>
      <S.Rightinformation>
        TYPE
        <S.PokemonInformation>{pokemonType}</S.PokemonInformation>
      </S.Rightinformation>
    </S.Wrapper>
  )
}

export default PostCards
