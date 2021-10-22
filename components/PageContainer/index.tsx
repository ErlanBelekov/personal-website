import { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';

interface PageContainerProps {
  test?: boolean;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({ children }) => {
  return (
    <Box px={['2', '4', '5']} h="100vh">
      {children}
    </Box>
  );
};

export default PageContainer;
