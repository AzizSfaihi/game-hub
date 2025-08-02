// Example usage in a component
import { Button, useToast } from "@chakra-ui/react";

const MyComponent = () => {
  const toast = useToast();

  const showSuccess = () => {
    toast({
      title: "Success!",
      description: "Your action was successful.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return <Button onClick={showSuccess}>Show Toast</Button>;
};
