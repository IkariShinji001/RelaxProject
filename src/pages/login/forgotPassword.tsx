"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";

function ForgotPassword() {
  return (
    <Container maxW="md" px={{ base: 4, md: 0 }} py={{ base: 12, md: 20 }}>
      <Stack gap={6}>
        <Box
          p={{ base: 6, md: 8 }}
          rounded="lg"
          shadow="md"
          bg="white"
          w="full"
        >
          <Heading
            size="lg"
            textAlign="center"
            mb={6}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Quên mật khẩu
          </Heading>

          <Stack gap={4}>
            <Field.Root required>
              <Field.Label fontSize={{ base: "sm", md: "md" }}>Email</Field.Label>
              <Input
                type="email"
                placeholder="exam@gmail.com"
                w="full"
              />
            </Field.Root>

            <Field.Root required>
              <Field.Label fontSize={{ base: "sm", md: "md" }}>Nhấn để gửi mã</Field.Label>
              <Button variant="outline" w="full">
                Gửi
              </Button>
            </Field.Root>
          </Stack>
        </Box>
      </Stack>

      {/* Thêm phần dưới nếu muốn */}
      <HStack justify="center" mt={6}>
        {/* Ví dụ: <Button variant="link">Quay lại</Button> */}
      </HStack>
    </Container>
  );
}

export default ForgotPassword;
