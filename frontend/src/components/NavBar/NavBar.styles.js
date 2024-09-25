import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

export const StyledMenuLink = styled(Link)(({ theme }) => ({
  paddingRight: '20px',
  color: 'white',
  textDecoration: "none",

  '&.active': {
    fontWeight: 'bold',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -5,
      width: '50%',
      height: '4px',
      borderRadius: '5px',
      backgroundColor: theme.palette.primary.main,
    },
  },

  '&:hover, &:active, &:focus': {
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -5,
      width: '50%',
      height: '4px',
      borderRadius: '5px',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
