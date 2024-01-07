import { FC } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

const UcButton: FC<any> = ({ funcProp }: { funcProp: Function }) => {
  return (
    <ChakraProvider>
      <Button
        w={"100px"}
        h={"100px"}
        onClick={() => {
          console.log("inner click", funcProp);
          funcProp("world");
        }}
      >
        <slot name="content" />
      </Button>
    </ChakraProvider>
  );
};

export default UcButton;
