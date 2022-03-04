import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 0;
`

export const BlueBall = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  margin-top: 30rem;
  margin-left: 1rem;
  border-radius: 100%;
  background: radial-gradient(
    81.25% 81.25% at 67.32% 18.75%,
    #0b92bd 0%,
    #22467b 100%
  );
  transform: rotate(30deg);
`

export const RedBall = styled.div`
  position: absolute;
  width: 23rem;
  height: 23rem;
  margin-left: 25rem;
  border-radius: 100%;
  background: radial-gradient(
    81.25% 81.25% at 67.32% 18.75%,
    #b31720 0%,
    #7b222d 100%
  );
  transform: rotate(30deg);
`
