import * as S from './styles'

interface IInputProps {
  placeholder: string
  //eslint-disable-next-line
  onChange: (e: any) => void
}

const Input = ({ placeholder, onChange }: IInputProps) => {
  return (
    <S.Wrapper>
      <S.Input onChange={onChange} placeholder={placeholder} />
    </S.Wrapper>
  )
}

export default Input
