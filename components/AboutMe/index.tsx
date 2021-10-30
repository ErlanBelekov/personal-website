import { Text, useDisclosure, Link, Collapse, Button } from '@chakra-ui/react';

export function AboutMe() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <>
        <Button onClick={onToggle}>Click to get to know me!</Button>
        <Collapse in={isOpen} animateOpacity>
          <Text my={4} fontSize="2xl" fontWeight="bold">
            Hey There!
            <br /> My name is Erlan, and I am a full-stack software engineer at{' '}
            <Link isExternal href="https://www.brilliantconsulting.dev/">
              Brilliant Consulting
            </Link>
            . <br /> I write about tech and make video courses(work in
            progress). <br /> I love eating unhealthy food, playing
            games(Witcher 3 and Chess) and sleeping zZzZ😴 <br />
            And since you&apos;re here, check out projects that I&apos;ve worked
            on or my articles!
          </Text>
        </Collapse>
      </>
    </>
  );
}
