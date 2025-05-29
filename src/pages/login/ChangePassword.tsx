import {
  Container,
  Box,
  VStack,
  Button,
  Text,
  Progress,
} from "@chakra-ui/react";
import { useState } from "react";
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

  const getPasswordStrength = (pw: string) => {
    let strength = 0;
    if (pw.length >= 6) strength += 1;
    if (/[A-Z]/.test(pw)) strength += 1;
    if (/[a-z]/.test(pw)) strength += 1;
    if (/[0-9]/.test(pw)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pw)) strength += 1;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(getPasswordStrength(newPassword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      alert("Không được để trống mật khẩu.");
    } else if (password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự.");
    } else if (password !== confirmPassword) {
      alert("Mật khẩu không khớp.");
    } else {
      // Xử lý gửi mật khẩu
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
