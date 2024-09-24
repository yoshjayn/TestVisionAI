import { Box, Button, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

import { StyledMenuLink } from './HamburderMenu.styles';

const HamburgerMenu = ({
  isMenuOpen,
  closeMenu,
}) => {
  const theme = useTheme();

  const slideIn = keyframes`
  from {
    transform: translateY(-150%);
  }
  to {
    transform: translateY(0%);
  }
`;

  const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-150%);
  }
`;
  return (
    <Box
      height="100%"
      sx={{
        display: isMenuOpen ? 'flex' : 'none',
        bottom: 0,
        overflow: 'auto',
        background: theme.palette.primary.main,
        flexDirection: 'column',
        gap: '20px',
        animation: isMenuOpen
          ? `${slideIn} 1s forwards`
          : `${slideOut} 1s forwards`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledMenuLink href="/" onClick={() => closeMenu()}>
          <Box>Home</Box>
        </StyledMenuLink>
        <StyledMenuLink href="#features" onClick={() => closeMenu()}>
          <Box>Features</Box>
        </StyledMenuLink>
        <StyledMenuLink href="#usage-guide" onClick={() => closeMenu()}>
          <Box>Usage Guide</Box>
        </StyledMenuLink>
        <StyledMenuLink href="#team" onClick={() => closeMenu()}>
          <Box>Team</Box>
        </StyledMenuLink>
        <StyledMenuLink href="#contact" onClick={() => closeMenu()}>
          <Box>Contact</Box>
        </StyledMenuLink>
      </Box>
      <Button
        onClick={() => closeMenu()}
        sx={{
          maxWidth: '150px',
          margin: '20px',
          background: theme.palette.secondary.main,
          color: 'white',
          '&:active, &:hover, &:focus': {
            background: 'white',
            color: theme.palette.secondary.main,
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default HamburgerMenu;
