import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import featureImg from '../../assets/Feature.png';
import FeatureCheckListItem from '../../components/FeatureCheckListItem/FeatureCheckListItem.component';

// TODO: Update copy text of features
const featureList = [
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
  {
    heading: 'Save Time',
    content:
      'Avoid hours of manual documentation by letting the AI generate test cases from screenshots',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="features">
      <Box
        margin="auto"
        sx={{
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
        {isMobile && (
          <Typography
            fontSize="2.5rem"
            textAlign="center"
            fontWeight={700}
            lineHeight={1.5}
          >
            Why{' '}
            <span style={{ color: theme.palette.primary.main }}>
              TestVisionAI?
            </span>
          </Typography>
        )}
        <Box
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={isMobile ? '0.5rem' : '6rem'}
          flexDirection={isMobile ? 'column-reverse' : 'row'}
          maxWidth="1440px"
        >
          <Box width={isMobile ? '100%' : '50%'}>
            {!isMobile && (
              <Typography
                fontSize="3rem"
                textAlign="left"
                mb="25px"
                fontWeight={700}
                lineHeight={1.5}
              >
                Why{' '}
                <span style={{ color: theme.palette.primary.main }}>
                  TestVisionAI?
                </span>
              </Typography>
            )}
            <Typography mb="15px">
              TestVisionAI is a cutting-edge AI-powered tool designed to
              streamline and automate the process of generating detailed testing
              instructions for any digital product feature. By simply uploading
              screenshots and optional context, users can quickly generate
              precise test cases, each complete with pre-conditions, testing
              steps, and expected results. Powered by a multimodal LLM (Large
              Language Model), TestVisionAI interprets visual and contextual
              data to deliver clear and actionable testing guidance.
            </Typography>
            <Typography>
              TestVisionAI isn’t just a tool—it’s a game changer for teams
              seeking to automate and streamline their testing processes. With
              AI-driven insights, manual test case writing becomes a thing of
              the past. TestVisionAI reduces the time required to plan and
              execute functional tests by interpreting visual data,
              understanding user context, and delivering precise,
              ready-to-execute test cases.
            </Typography>
          </Box>
          <Box
            sx={{
              width: '80%',
              [theme.breakpoints.up('sm')]: {
                width: '50%',
              },
              [theme.breakpoints.up('lg')]: {
                width: '30%',
                marginRight: '8rem',
              },
            }}
          >
            <Box
              component="img"
              width="100%"
              src={featureImg}
              alt="Feature Image"
            />
          </Box>
        </Box>
      </Box>
      <Box
        margin="auto"
        minHeight="25rem"
        sx={{
          color: 'white',
          background: theme.palette.secondary.main,
          padding: '16px 20px',
          [theme.breakpoints.up('sm')]: {
            padding: '14px 32px',
          },
          [theme.breakpoints.up('md')]: {
            padding: '28px 48px',
          },
          [theme.breakpoints.up('lg')]: {
            padding: '32px 52px',
          },
        }}
      >
        <Typography
          fontSize="3rem"
          textAlign="center"
          mb="25px"
          fontWeight={700}
          lineHeight={1.5}
        >
          <span style={{ color: theme.palette.primary.main }}>
            TestVisionAI
          </span>{' '}
          - Transforming the Testing Process
        </Typography>
        <Box
          display="flex"
          gap="2.5rem"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {featureList.map((ele) => (
            <FeatureCheckListItem {...ele} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
