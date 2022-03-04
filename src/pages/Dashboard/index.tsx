import * as S from './styles'
import Button from '../../components/DataEntry/Button'
import Input from '../../components/DataEntry/Input'

const Dashboard = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.WelcomeText>Welcome to Pokedex!</S.WelcomeText>
        <S.DataWrapper>
          <Input placeholder="Type a pokemon" />
          <Button>Search</Button>
        </S.DataWrapper>
      </S.Container>
    </S.Wrapper>
  )
}

export default Dashboard
