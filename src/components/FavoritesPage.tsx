import { Box, Heading } from '@chakra-ui/react';
import NavBar from './NavBar';
import AdBanner from "../components/AdBanner";

const FavoritesPage = () => {
  return (
    
    <Box>
      
      <NavBar onSearch={() => {}} />
      <Box padding={6}>
        <Heading size="lg" textAlign="center">
          Favourites feature will be added in a future update.
        </Heading>
      </Box>
      <div>
      <h1>🎮 Welcome to PlaySphere</h1>
      <AdBanner />
    </div>
    </Box>
  );
};

export default FavoritesPage;
