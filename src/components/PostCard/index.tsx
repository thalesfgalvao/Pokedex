import * as S from './styles'

export interface IPostCards {
  pokemonName?: string
  pokemonId?: string
  pokemonWeight?: string
  pokemonImage?: string
}

const PostCards = ({
  pokemonName,
  pokemonId,
  pokemonWeight,
  pokemonImage
}: IPostCards) => {
  return (
    <S.Wrapper>
      <S.PokemonName>{pokemonName}</S.PokemonName>
      <S.PokemonSprite src={pokemonImage} />
      <S.LeftInformation>
        <S.Subtitle>ID</S.Subtitle>
        <S.PokemonInformation>{pokemonId}</S.PokemonInformation>
      </S.LeftInformation>
      <S.Rightinformation>
        <S.Subtitle>Weight</S.Subtitle>
        <S.PokemonInformation>{pokemonWeight}</S.PokemonInformation>
      </S.Rightinformation>
    </S.Wrapper>
  )
}

export default PostCards
