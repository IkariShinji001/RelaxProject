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
function ChangePassword() {
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
          
          <Field.Root required>
            <Field.Label>Mật khẩu mới</Field.Label>
            <PasswordInput
              defaultValue=""
              visible={visible}
              onVisibleChange={setVisible}
              placeholder="Nhập mật khẩu"
            />
            
          </Field.Root>
          <Field.Root required>
            <Field.Label>Nhập lại mật khẩu</Field.Label>
              <PasswordInput
                defaultValue=""
                visible={visible}
                onVisibleChange={setVisible}
                placeholder="Nhập mật khẩu"
                />
          </Field.Root>
          
          <Button
            colorScheme="teal"
            type="submit"
            width="full"
            fontWeight="bold"
            onClick={() => {
              navigate("/Home");
            }}
          >
            Đăng nhập
          </Button>
        </VStack>
      </Box>
    </Box>
  </Container>
);
}

export default ChangePassword;
