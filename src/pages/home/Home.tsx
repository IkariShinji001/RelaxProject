import { Button, HStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";

function Home() {
  return (
    <Container>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Input placeholder="sss" variant="flushed" />
        <PasswordInput />
      </HStack>
    </Container>
  );
}

export default Home;
