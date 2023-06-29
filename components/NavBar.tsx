import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="white"
      boxShadow="md"
      py={4}
      px={8}
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Flex align="center" top={8}>
        <Box fontWeight="bold" fontSize="lg">
          <Image
            borderRadius="full"
            boxSize="50px"
            src="/portfolio.gif"
            alt="Dan Abramov"
          />
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Flex>
            <Box mx={4}>Accueil</Box>
            <Box mx={4}>À propos</Box>
            <Box mx={4}>Services</Box>
            <Box mx={4}>Contact</Box>
          </Flex>
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="black"
          size="md"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4}>
          <Flex direction="column">
            <Box mx={4} my={2}>
              Accueil
            </Box>
            <Box mx={4} my={2}>
              À propos
            </Box>
            <Box mx={4} my={2}>
              Services
            </Box>
            <Box mx={4} my={2}>
              Contact
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
