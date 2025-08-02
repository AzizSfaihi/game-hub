import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ChakraTooltipProps {
  label: string;
  children: ReactNode;
}

export const Tooltip = ({ label, children, ...rest }: Props) => {
  return (
    <ChakraTooltip label={label} {...rest}>
      {children}
    </ChakraTooltip>
  );
};
