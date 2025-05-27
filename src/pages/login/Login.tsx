"use client";

import {
  Text,
  Container,
  Box,
  Input,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "@chakra-ui/react"; 
import { PasswordInput } from "@/components/ui/password-input";

function Login() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <Container maxW="md">
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <Box p={8} rounded="lg" shadow="md" w="full">
          <VStack gap={6} as="form">
            <Heading size="lg" textAlign="center">
              Đăng nhập
            </Heading>

            <Field.Root required>
              <Field.Label>Email</Field.Label>
              <Input type="email" placeholder="exam@gmail.com" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>Mật khẩu</Field.Label>
              <PasswordInput
                defaultValue=""
                visible={visible}
                onVisibleChange={setVisible}
                placeholder="Nhập mật khẩu"
              />
              <Text padding={2} fontSize="sm" color="gray.500">
                Nhấn để {visible ? "ẩn" : "hiện"}
              </Text>
            </Field.Root>

            <Button
              colorScheme="teal"
              type="submit"
              width="full"
              fontWeight="bold"
            >
              Đăng nhập
            </Button>

            <Text fontSize="sm" color="gray.600">
              Bạn chưa có tài khoản?
            </Text>

            <Button
              variant="outline"
              colorScheme="teal"
              onClick={() => {
                navigate("/register");
              }}
              width="full"
            >
              quên mật khẩu?
            </Button>

          
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
