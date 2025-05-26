import { Button, HStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
"use client";
import React from "react";
function forgotPassword() {
  return (
    <Container>
      <HStack>
        <text>nhấn để gửi mã</text>
        <Input placeholder="your email" variant="flushed" minH="100vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              px={4} /> 
      </HStack>
    </Container>
  );
}

export default forgotPassword;
