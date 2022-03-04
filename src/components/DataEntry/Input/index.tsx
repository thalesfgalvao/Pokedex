import * as S from './styles'

interface IInputProps {
  placeholder: string
}

const Input = ({ placeholder }: IInputProps) => {
  return (
    <S.Wrapper>
      <S.Input placeholder={placeholder} />
    </S.Wrapper>
  )
}

export default Input
