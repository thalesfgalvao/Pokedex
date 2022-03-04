import * as S from './styles'

interface IButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <S.Wrapper>
      <S.Button onClick={onClick}>{children}</S.Button>
    </S.Wrapper>
  )
}

export default Button
