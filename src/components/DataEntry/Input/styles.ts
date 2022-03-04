import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.grey};
    padding: 0.5rem;
    border-radius: 1rem 0rem 0rem 1rem;
    border: none;

    &:focus {
      border: none;
    }
  `}
`
