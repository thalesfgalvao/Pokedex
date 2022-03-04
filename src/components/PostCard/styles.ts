import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  z-index: 500;
  grid-template-rows: 2fr 4fr 4fr;
  grid-template-columns: 6fr 6fr;
  background: linear-gradient(
    152.97deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(1rem);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1.5rem;
  padding: 2rem 5rem;
  margin-top: 3rem;
  width: 45vh;
  height: 55vh;
`

export const PokemonName = styled.h1`
  grid-row: 1;
  grid-column: 1/4;
  text-align: center;
`

export const PokemonSprite = styled.img`
  grid-row: 2;
  grid-column: 1/4;
  align-self: center;
`

export const LeftInformation = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: column;
  grid-column: 1/2;
  grid-row: 3;
  gap: 0.2rem;
  font-weight: bold;
`

export const Rightinformation = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: column;
  grid-column: 3/4;
  grid-row: 3;
  gap: 0.2rem;
  font-weight: bold;
`

export const PokemonInformation = styled.p`
  font-weight: lighter;
`
