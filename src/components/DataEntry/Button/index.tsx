import { useState } from 'react'
import * as S from './styles'

interface IButtonProps {
  children: string
}

const Button = ({ children }: IButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(!isLoading)
  }

  return (
    <S.Wrapper>
      <S.Button onClick={handleClick}>
        {isLoading ? <S.Loader size="1rem" color="white" /> : children}
      </S.Button>
    </S.Wrapper>
  )
}

export default Button
