import styled, { css } from 'styled-components'
import ClipLoader from 'react-spinners/ClipLoader'

export const Wrapper = styled.div``

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    width: 10rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0rem 10rem 10rem 0rem;
    font-weight: ${theme.fonts.weight.bold};
    background: ${theme.colors.errorColor};
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

export const Loader = styled(ClipLoader)``
