import { Switch, useColorMode, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function BoutonSwitchTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      colorScheme="teal"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    >
      <Icon as={colorMode === "dark" ? SunIcon : MoonIcon} boxSize={4} />
    </Switch>
  );
}