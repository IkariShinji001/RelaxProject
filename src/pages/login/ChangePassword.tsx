import {
Container,
Box,
VStack,
Button,
Text,
Progress
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";

function ChangePassword() {
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [visible, setVisible] = useState(false);
const [visibleConfirm, setVisibleConfirm] = useState(false);
const [passwordStrength, setPasswordStrength] = useState(0);
const navigate = useNavigate();

const hasUpper = (pw: string) => /[A-Z]/.test(pw);
const hasLower = (pw: string) => /[a-z]/.test(pw);
const hasNumber = (pw: string) => /[0-9]/.test(pw);
const hasSpecial = (pw: string) => /[^A-Za-z0-9]/.test(pw);
const hasMinLength = (pw: string) => pw.length >= 6;

const getPasswordStrength = (pw: string): number => {
  let strength = 0;
  if (hasUpper(pw)) strength += 1;
  if (hasLower(pw)) strength += 1;
  if (hasNumber(pw)) strength += 1;
  if (hasSpecial(pw)) strength += 1;
  if (hasMinLength(pw)) strength += 1;
  return strength;
};



const handlePasswordChange = (e: { target: { value: any; }; }) => {
const newPassword = e.target.value;
setPassword(newPassword);
setPasswordStrength(getPasswordStrength(newPassword));
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!password || !confirmPassword) {
    alert("Không được để trống mật khẩu.");
  } else if (!hasMinLength(password)) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
  } else if (!(hasUpper(password) && hasLower(password) && hasNumber(password) && hasSpecial(password))) {
    alert("Mật khẩu phải có ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt.");
  } else if (password !== confirmPassword) {
    alert("Mật khẩu không khớp.");
  } else {
    alert("Đổi mật khẩu thành công!");
    navigate("/Home");
  }
};


return (
<Container maxW="md">
<Box minH="100vh" display="flex" alignItems="center" justifyContent="center" px={4}>
  <Box p={8} rounded="lg" shadow="md" w="full">
    <VStack gap={6} as="form" onSubmit={handleSubmit}>
      <Field.Root required>
        <Field.Label>Mật khẩu mới</Field.Label>
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          visible={visible}
          onVisibleChange={setVisible}
          placeholder="Nhập mật khẩu"
        />
        <Progress.Root
          value={(passwordStrength / 5) * 100}
          size="sm"
          colorScheme={
            passwordStrength <= 2
              ? "red"
              : passwordStrength === 3
              ? "yellow"
              : "green"
          }
          mt={2}
        />
        <Text fontSize="sm" color="gray.500">
          Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.
        </Text>
      </Field.Root>

      <Field.Root required>
        <Field.Label>Nhập lại mật khẩu</Field.Label>
        <PasswordInput
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          visible={visibleConfirm}
          onVisibleChange={setVisibleConfirm}
          placeholder="Nhập lại mật khẩu"
        />
      </Field.Root>

      <Button type="submit" colorScheme="teal" width="full" fontWeight="bold">
        Đăng nhập
      </Button>
    </VStack>
  </Box>
</Box>
</Container>
);
}

export default ChangePassword;
