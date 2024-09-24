import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FeatureCheckListItem = ({
  heading,
  content,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display="flex"
      gap="10px"
      width={isMobile ? '100%' : '40%'}
      justifyContent={isMobile ? 'center' : 'start'}
    >
      <CheckCircleOutlineIcon />
      <Typography>
        <span style={{ fontWeight: 'bold' }}>{heading}:</span> {content}
      </Typography>
    </Box>
  );
};

export default FeatureCheckListItem;
