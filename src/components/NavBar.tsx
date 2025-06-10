import { Box, Button, Flex, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
  onSearch: (searchText: string) => void;
  onReset?: () => void; // optional reset handler
}

const NavBar = ({ onSearch, onReset }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/' && onReset) {
      onReset(); // reset filters if already on homepage
    }
    navigate('/');
  };

  return (
    <Flex
      padding="10px"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
    >
      {/* Left: Logo and Search */}
      <Flex align="center" gap={4} flex="1">
        <Image
          src={logo}
          boxSize="60px"
          cursor="pointer"
          onClick={handleLogoClick}
        />
        <Box flex="1">
          <SearchInput onSearch={onSearch} />
        </Box>
      </Flex>

      {/* Right: Buttons and Theme Toggle */}
      <Flex align="center" gap={4} marginLeft={4}>
        <Button variant="link" onClick={() => navigate('/favourites')}>
          Favourites
        </Button>
        <Button variant="link" onClick={() => navigate('/login')}>
          Login / Signup
        </Button>
        <ColorModeSwitch />
      </Flex>
    </Flex>
  );
};

export default NavBar;
