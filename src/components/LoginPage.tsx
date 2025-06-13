import { Box, Heading } from '@chakra-ui/react';
import AdBanner from "../components/AdBanner";
import NavBar from './NavBar';

const LoginPage = () => {
  return (
    <Box>
      
      <NavBar onSearch={() => {}} />
      <Box padding={6}>
        <Heading size="lg" textAlign="center">
            Login/Signup feature will be added in a future update.
        </Heading>
      </Box>
      <div>
      <h1>🎮 Welcome to PlaySphere</h1>
      <AdBanner />
    </div>
    </Box>
  );
};

export default LoginPage;
