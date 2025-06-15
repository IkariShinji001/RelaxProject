import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Avatar,
  Badge,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiFileText,
  FiMail,
  FiCalendar,
  FiLogOut,
} from "react-icons/fi";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Link as RouterLink } from "react-router-dom";

interface NavItemProps {
  icon: any;
  children: string;
  href: string;
  badge?: string;
}

const NavItem = ({ icon, children, href, badge }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  const activeBg = useColorModeValue("blue.50", "blue.900");
  const activeColor = useColorModeValue("blue.600", "blue.200");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <RouterLink to={href} style={{ textDecoration: "none", width: "100%" }}>
      <Flex
        align="center"
        p="3"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? activeBg : "transparent"}
        color={isActive ? activeColor : "inherit"}
        _hover={{
          bg: isActive ? activeBg : hoverBg,
        }}
        transition="all 0.2s"
      >
        <Icon mr="3" fontSize="18" as={icon} />
        <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"}>
          {children}
        </Text>
        {badge && (
          <Badge
            ml="auto"
            colorScheme="red"
            variant="solid"
            borderRadius="full"
            fontSize="xs"
          >
            {badge}
          </Badge>
        )}
      </Flex>
    </RouterLink>
  );
};

export default function Sidebar() {
  const bg = useColorModeValue("blue.50", "blue.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bg}
      borderRight="1px"
      borderRightColor={borderColor}
      w="250px"
      h="100vh"
      position="sticky"
      top="0"
    >
      <VStack align="stretch" h="full">
        {/* Header */}
        <Box p="6">
          <HStack>
            <Avatar.Root>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Box>
              <Text fontSize="sm" fontWeight="semibold">
                John Doe
              </Text>
              <Text fontSize="xs" color="gray.500">
                Administrator
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Navigation */}
        <VStack align="stretch" p="4" flex="1">
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wide"
            mb="2"
            px="2"
          >
            Main
          </Text>

          <NavItem icon={FiHome} href="/">
            Dashboard
          </NavItem>
          <NavItem icon={FiHome} href="/analytics">
            Analytics
          </NavItem>
          <NavItem icon={FiFileText} href="/reports">
            Reports
          </NavItem>

          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wide"
            mb="2"
            mt="6"
            px="2"
          >
            Management
          </Text>

          <NavItem icon={FiUser} href="/users">
            Users
          </NavItem>
          <NavItem icon={FiMail} href="/messages" badge="3">
            Messages
          </NavItem>
          <NavItem icon={FiCalendar} href="/calendar">
            Calendar
          </NavItem>
          <NavItem icon={FiSettings} href="/settings">
            Settings
          </NavItem>
        </VStack>

        {/* Footer */}
        <Box p="4">
          <Button
            variant="ghost"
            w="full"
            justifyContent="flex-start"
            fontSize="sm"
            color="gray.500"
            _hover={{ color: "red.500", bg: "red.50" }}
          >
            Logout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
