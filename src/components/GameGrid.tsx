import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}


        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          //minChildWidth="220px"
          padding="10px"
          spacing={10}
          //px={{ base: 4, md: 6 }}
          //width="100%"
        >
          
          {isLoading &&
            skeletons.map((skeleton) =><CardContainer> <GameCardSkeleton key={skeleton} /></CardContainer>)}
          {games.map((game) => (
           <CardContainer> <GameCard key={game.id} game={game}></GameCard></CardContainer>
          ))}
          
        </SimpleGrid>
        

    </>
  );
};

export default GameGrid;
