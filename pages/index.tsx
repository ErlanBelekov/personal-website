import { Text, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import { AboutMe } from '../components/AboutMe';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header />
      <Box px={['0', '4', '16', '25vw']}>
        <AboutMe />
      </Box>
    </PageContainer>
  );
};

export default Home;
