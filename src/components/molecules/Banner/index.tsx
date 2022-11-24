import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import baseTheme from '../../../themes';
import reading_person from '../../../assets/reading_person.svg';
import styled from '@emotion/styled';

const CardContentBanner = styled(CardContent)({
  flex: '1 0 auto'
}) as typeof CardContent;
const CardBanner = styled(Card)({
  display: 'flex',
  padding: baseTheme.spacing(2),
  backgroundColor: '#F1F6F4',
  margin: baseTheme.spacing(4)
}) as typeof Card;
const FlexBoxColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: baseTheme.spacing(2),
  margin: baseTheme.spacing(4)
}) as typeof Box;
const CardMediaBanner = styled(CardMedia)({
  height: 230,
  width: 400
}) as typeof CardMedia;
const Banner: React.FC = (props) => {
  return (
    <CardBanner variant="outlined">
      <FlexBoxColumn>
        <CardContentBanner>
          <Typography component="div" variant="h4" color="info">
            Explore Books on entrepreneurship
          </Typography>
          <Typography component="div">
            Everything you need to know about thriving on a shoestring budget,
            making your first million, and hiring right from the start.
          </Typography>
        </CardContentBanner>
      </FlexBoxColumn>

      <CardMediaBanner component="img" image={reading_person} alt="img" />
    </CardBanner>
  );
};
export default Banner;
