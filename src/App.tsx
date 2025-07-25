import { useState } from "react";
import { Button, Grid, GridItem, Show, Stack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "@/components/ui/color-mode"
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {

 const { toggleColorMode } = useColorMode()


  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem area="nav" >
          <NavBar></NavBar>
        </GridItem>

      
          <GridItem area="aside" display={{ base: "none", lg: "block" }}>
           <GenreList/>
          </GridItem>
      
        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>


    </>
  );
}

// import { Box, Text, Button } from "@chakra-ui/react";

// function App() {
//   return (
//     <Box p={4}>
//       <Text fontSize="xl" color="blue.500">
//         Hello Chakra UI!
//       </Text>
//       <Button mt={4} colorScheme="teal">
//         Click Me
//       </Button>
//     </Box>
//   );
// }

export default App;
