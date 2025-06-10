import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import useGameDetail from '../hooks/useGameDetail';

const GameDetailPage = () => {
  const { id } = useParams();
  const { game, error, isLoading } = useGameDetail(Number(id));

  if (isLoading) return <Text>Loading...</Text>;
  if (error || !game) return <Text>Error loading game.</Text>;

  return (
    <Box>
      <NavBar onSearch={() => {}} />
      <Image src={game.background_image} width="100%" height="400px" objectFit="cover" />
      <Box padding={6}>
        <Heading size="2xl" marginBottom={4}>{game.name}</Heading>
        <Text fontSize="lg">{game.description_raw}</Text>
      </Box>
    </Box>
  );
};

export default GameDetailPage;