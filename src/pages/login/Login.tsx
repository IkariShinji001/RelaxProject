"use client";

import {
  Text,
  Container,
  Box,
  Input,
  Heading,
  Button,
  VStack,
  InputGroup,
} from "@chakra-ui/react";
// import { Switch } from "@chakra-ui/react";
import { useState } from "react";
import { Field } from "@chakra-ui/react";
// Update the import path below to the correct relative path if PasswordInput exists elsewhere, for example:
import { PasswordInput } from "../../components/ui/password-input";
// Or create the file at src/components/ui/password-input.tsx if it does not exist.

function Login() {
  const [visible, setVisible] = useState(false)

  return (
    <Container maxW="md">
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <Box
          p={8}
          rounded="lg"
          shadow="md"
          w="full"
        >
          <VStack gap={6} as="form">
            <Heading size="lg" textAlign="center">
              Đăng nhập
            </Heading>

            <Field.Root required>
              <Field.Label>Tài khoản</Field.Label>
                <Input type="email" placeholder="exam@gmail.com" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>Mật khẩu</Field.Label>
                <PasswordInput
                  defaultValue="secret"
                  visible={visible}
                  onVisibleChange={setVisible} 
                  placeholder="Nhập mật khẩu"
                  />
                  <Text >nhấn để {visible ? "ẩn" : "hiện"}</Text>
            </Field.Root>
            <Button
              colorScheme="teal"
              type="submit"
              width="full"
              fontWeight="bold">
              Đăng nhập
            </Button>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
