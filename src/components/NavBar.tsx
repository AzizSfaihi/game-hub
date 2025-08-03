import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import darkLogo from "../assets/dragon-solid-full.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import lightLogo from "../assets/dragon-solid-light.svg";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const logoSrc = useColorModeValue(darkLogo, lightLogo);

  return (
    <div>
      <HStack padding="10px">
        <Image src={logoSrc} alt="Logo" height="55px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
