import { Button, HStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function Home() {
  return (
    <Container>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Input placeholder="sss" variant="flushed" />
      </HStack>
    </Container>
  );
}

export default Home;
