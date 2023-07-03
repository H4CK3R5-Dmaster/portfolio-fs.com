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
import NextLink from "next/link"

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="transparent"
      boxShadow="md"
      py={4}
      px={8}
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Flex align="center" top={8}>
        <Box fontWeight="bold" fontSize="lg">
          <NextLink href={"/"}>
            <Image
              borderRadius="full"
              boxSize="50px"
              src="/portfolio.gif"
              alt="Dan Abramov"
            />
          </NextLink>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Flex color={"white"}>
            <Box mx={4}><NextLink href={"/"}>
              Acceuil
            </NextLink></Box>
            <Box mx={4}><NextLink href={"/"}>
              Projets
            </NextLink></Box>
            <Box mx={4}><NextLink href={"/"}>
              Contact
            </NextLink></Box>
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
          <Flex direction="column" color={"white"}>
            <Box mx={4} my={2}>
              <NextLink href={"/"}>
                Acceuil
              </NextLink>
            </Box>
            <Box mx={4} my={2}>
              <NextLink href={"/"}>
                Projets
              </NextLink>
            </Box>
            <Box mx={4} my={2}>
              <NextLink href={"/"}>
                Contact
              </NextLink>
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
