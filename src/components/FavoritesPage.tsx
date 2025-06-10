import { Box, Heading } from '@chakra-ui/react';
import NavBar from './NavBar';

const FavoritesPage = () => {
  return (
    <Box>
      <NavBar onSearch={() => {}} />
      <Box padding={6}>
        <Heading size="lg" textAlign="center">
          Favourites feature will be added in a future update.
        </Heading>
      </Box>
    </Box>
  );
};

export default FavoritesPage;
