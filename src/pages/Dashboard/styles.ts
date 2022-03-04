import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 85vh;
  height: 85vh;
  border: 1px solid red;
  margin-top: 5rem;
  gap: 2rem;
`

export const WelcomeText = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.huge};
    margin-top: 5rem;
  `}
`

export const DataWrapper = styled.div`
  display: flex;
`
