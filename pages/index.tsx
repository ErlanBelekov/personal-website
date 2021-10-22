import { Text, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header />
      <Box px={['0', '4', '16', '32']} py={10}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Hi, I&apos;m Erlan.
        </Text>
        {/* color="bisque" */}
        <Text fontSize="6xl" fontWeight="extrabold">
          I am a software engineer, and this should be some useful description.{' '}
          <br />
        </Text>
      </Box>
    </PageContainer>
  );
};

export default Home;
