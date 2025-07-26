import { useState } from "react";
import { Button, Grid, GridItem, Show, Stack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "@/components/ui/color-mode"
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {

 const { toggleColorMode } = useColorMode()
const [selectedGenre,setSelectedGenre]  = useState<Genre|null>(null);


  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base : '1fr',
          lg : '200px 1fr'
        }}
      >
        <GridItem area="nav" >
          <NavBar></NavBar>
        </GridItem>

      
          <GridItem area="aside" padding={5} display={{ base: "none", lg: "block" }}>
           <GenreList onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
          </GridItem>
      
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
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
