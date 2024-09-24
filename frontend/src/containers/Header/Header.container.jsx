import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../../assets/TestVisionAILogo.png';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu.component';
import NavBar from '../../components/NavBar/NavBar.component';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuTogle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'usage-guide', label: 'Usage Guide' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      let maxIntersection = 0;
      menuItems.forEach((menuItem) => {
        const element = document.getElementById(menuItem.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const intersection =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (intersection > maxIntersection) {
            maxIntersection = intersection;
            currentSection = menuItem.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (activeSection !== id) {
      setActiveSection(id);
    }
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={9999}
      sx={
        isMenuOpen
          ? { overflow: 'hidden', height: '100vh', maxHeight: '100vh' }
          : {}
      }
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="sticky"
        top={0}
        zIndex="9999"
        sx={{
          background: theme.palette.secondary.main,
          padding: '16px 20px',
          [theme.breakpoints.up('sm')]: {
            padding: '16px 32px',
          },
          [theme.breakpoints.up('md')]: {
            padding: '16px 48px',
          },
          [theme.breakpoints.up('lg')]: {
            padding: '16px 52px',
          },
        }}
      >
        <Box
          maxWidth="1440px"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/">
            <Box
              sx={{
                maxWidth: '10rem',
                [theme.breakpoints.up('sm')]: {
                  maxWidth: '12rem',
                },
                [theme.breakpoints.up('md')]: {
                  maxWidth: '15rem',
                },
              }}
            >
              <Box
                component="img"
                width="100%"
                src={logo}
                alt="Test Vision AI Logo"
                sx={{ borderRadius: '4px' }}
              />
            </Box>
          </Link>
          {isMobile ? (
            <>
              {!isMenuOpen && (
                <MenuIcon
                  onClick={() => handleMenuTogle()}
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover, &:focus': {
                      color: 'primary.main',
                    },
                  }}
                />
              )}
              {isMenuOpen && (
                <CloseIcon
                  onClick={() => handleMenuTogle()}
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover, &:focus': {
                      color: 'primary.main',
                    },
                  }}
                />
              )}
            </>
          ) : (
            <NavBar
              menuItems={menuItems}
              activeMenu={activeSection}
              handleMenuItemClick={handleNavClick}
            />
          )}
          {!isMobile && (
            <Button
              sx={{
                width: '100%',
                maxWidth: '150px',
                background: theme.palette.primary.main,
                color: 'white',
                '&:active, &:hover, &:focus': {
                  background: 'white',
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Log In
            </Button>
          )}
        </Box>
      </Box>
      {isMobile && (
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
      )}
    </Box>
  );
};

export default Header;
