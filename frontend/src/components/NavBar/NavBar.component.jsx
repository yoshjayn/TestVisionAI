import { Box, Button, useTheme } from '@mui/material';
import { StyledMenuLink } from './NavBar.styles';

const NavBar = ({ menuItems, activeMenu, handleMenuItemClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {menuItems.map((menuItem) => (
        <StyledMenuLink
          className={activeMenu === menuItem.id ? 'active' : ''}
          href={`#${menuItem.id}`}
          onClick={handleMenuItemClick}
        >
          <Box>{menuItem.label}</Box>
        </StyledMenuLink>
      ))}
    </Box>
  );
};

export default NavBar;
