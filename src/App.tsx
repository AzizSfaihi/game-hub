import { useState } from "react";
import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre : Genre | null,
  platform : Platform | null,
  sortOrder : string,
  searchText : string
}

function App() {

const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);


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
          <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})} />
        </GridItem>

      
          <GridItem area="aside" padding={5} display={{ base: "none", lg: "block" }}>
           <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery, genre})}/>
          </GridItem>
      
        <GridItem area="main">
          <Flex paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}></PlatformSelector>
            </Box>
            <SortSelector  onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} selectedOrder={gameQuery.sortOrder}></SortSelector>
          </Flex>
          <GameGrid gameQuery={gameQuery}></GameGrid>
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
