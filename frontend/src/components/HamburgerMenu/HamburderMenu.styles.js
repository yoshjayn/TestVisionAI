import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMenuLink = styled(Link)(({ theme }) => ({
  padding: '20px',
  color: 'white',
  width: '100%',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderBottom: `1px solid ${theme.palette.grey[500]}`,
  '&:hover, &:active, &:focus': {
    color: theme.palette.primary.main,
    background: 'white',
  },
}));
