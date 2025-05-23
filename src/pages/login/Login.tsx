import { Button, HStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
function Login() {
  return (
    <Container>
      <HStack>
        <Button>LOGIN</Button>
        <Input placeholder="sss" variant="flushed" />
      </HStack>
    </Container>
  );
}

export default Login;
