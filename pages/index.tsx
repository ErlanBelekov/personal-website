import { Text, Box, Link, Flex, Avatar } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header />
      <Box px={['0', '4', '16', '25vw']}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Erlan Belekov
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Hey There!
          <br /> My name is Erlan, and I am a full-stack software engineer at{' '}
          <Link isExternal href="https://www.brilliantconsulting.dev/">
            Brilliant Consulting
          </Link>
          . I also write blog posts about tech and make video courses(in
          progress). <br /> I love eating unhealthy food, playing games(Witcher
          3 and Chess) and sleeping zZzZ😴 <br />
          And since you&apos;re here, check out projects that I&apos;ve worked
          on or my articles!
        </Text>
      </Box>
    </PageContainer>
  );
};

export default Home;
