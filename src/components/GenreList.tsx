import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image,Text, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectedGenre : (genre :Genre) => void;
}

const GenreList = ({onSelectedGenre}:Props) => {
  const { data, isLoading ,error} = useGenres();
  
if(isLoading) return <Spinner/>;
if(error) return null;

  return (   
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            
            />
           <Button onClick={()=>onSelectedGenre(g)} fontSize='lg' variant="link"> {g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
