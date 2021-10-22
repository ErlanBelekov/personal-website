import { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  Flex,
  IconButton,
  Link,
  Tag,
  Icon,
  TagLabel,
  Text,
  Box,
  HStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaGithub, FaHammer, FaMoon, FaSun, FaTwitter } from 'react-icons/fa';

const links = [
  {
    text: 'Home',
    link: '/',
    isWIP: false,
  },
  {
    text: 'Projects',
    link: '/projects',
    isWIP: true,
  },
  {
    text: 'Articles',
    link: '/articles',
    isWIP: true,
  },
  {
    text: 'Courses',
    link: '/courses',
    isWIP: true,
  },
];

function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            {links.map((link) => {
              return (
                <Link
                  href={link.link}
                  key={link.text}
                  d="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{
                    textDecoration: 'none',
                  }}
                  py={2}
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    {link.text}
                  </Text>
                  {link.isWIP && (
                    <Tag size="lg">
                      <TagLabel>
                        <Icon as={FaHammer} />
                      </TagLabel>
                    </Tag>
                  )}
                </Link>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        py={4}
        alignItems="center"
        justifyContent="space-between"
        px={['0', '4', '16', '32']}
      >
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Open navigation menu`}
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
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
