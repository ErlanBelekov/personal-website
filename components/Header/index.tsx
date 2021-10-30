import {
  Flex,
  IconButton,
  Link,
  Text,
  Box,
  HStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaTwitter } from 'react-icons/fa';

function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <Flex
        py={4}
        alignItems="center"
        justifyContent="space-between"
        px={['0', '4', '16', '25vw']}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Erlan Belekov
        </Text>
        <Box />
        <HStack spacing={1} d="flex" alignItems="center">
          <Link isExternal href="https://github.com/ErlanBelekov">
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Github`}
              variant="ghost"
              color="current"
              transition="color 0.2s"
              _hover={{ color: 'gray.600' }}
              icon={<FaGithub />}
            />
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/erlan-belekov-413435168/"
          >
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`LinkedIn`}
              variant="ghost"
              color="current"
              transition="color 0.2s"
              _hover={{ color: 'gray.600' }}
              icon={<FaLinkedin />}
            />
          </Link>
          <Link isExternal href="https://twitter.com/erlan_belekov">
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Github`}
              variant="ghost"
              color="current"
              transition="color 0.2s"
              _hover={{ color: 'gray.600' }}
              icon={<FaTwitter />}
            />
          </Link>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch mode`}
            variant="ghost"
            color="current"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </HStack>
      </Flex>
    </>
  );
}

export default Header;
