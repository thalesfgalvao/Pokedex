import Balls from '../../components/Balls'
import * as S from './style'
export type HomeProps = {
  children: React.ReactNode
}

const Dashboard = ({ children }: HomeProps) => {
  return (
    <S.Wrapper>
      <Balls />
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}

export default Dashboard
