import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "@/hooks/useGenres";
import { Platform } from "@/hooks/usePlatforms";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      //minChildWidth="220px"
      padding="10px"
      spacing={6}
      //px={{ base: 4, md: 6 }}
      //width="100%"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardContainer key={skeleton}>
            {" "}
            <GameCardSkeleton />
          </CardContainer>
        ))}

      {data.map((game) => (
        <CardContainer key={game.id}>
          {" "}
          <GameCard game={game}></GameCard>
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
