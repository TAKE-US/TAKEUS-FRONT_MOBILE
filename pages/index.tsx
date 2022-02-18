import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

const Header = styled.div`
  background-color: ${(props) => props.theme.color.primary}
`

const Home: NextPage = (): ReactElement => {
  return <Header>Home</Header>
};

export default Home;
