import styled from 'styled-components';

export const MainWrapper = styled.main`
  flex:1;
  border: 1px solid #e2e2e2;
  padding: 2rem;
  overflow-y:scroll;
  background-color: #f2f2f2;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    & > div {
      margin-bottom: 1rem;
    }
  }
`;