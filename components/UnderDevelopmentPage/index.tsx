import { Box, Text } from '@chakra-ui/react';
import Header from '../Header';
import PageContainer from '../PageContainer';

export function UnderDevelopmentPage() {
  return (
    <PageContainer>
      <Header />
      <Box h="100%" pt="40vh" px={['0', '4', '16', '25vw']} w="100%">
        <Text fontWeight="extrabold" fontSize="4xl" textAlign="center">
          This page is still in development, you&apos;re a bit early!
        </Text>
      </Box>
    </PageContainer>
  );
}
