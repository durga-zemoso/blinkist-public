import React from 'react';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@material-ui/icons';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row'
}) as typeof Box;

const IconWithText: React.FC<{
  text: string;
  path: string;
}> = (props) => {
  return (
    <FlexBox>
      <AccessTime />
      <Typography variant="caption" color="info">
        {props.text}{' '}
      </Typography>
    </FlexBox>
  );
};

export default IconWithText;
