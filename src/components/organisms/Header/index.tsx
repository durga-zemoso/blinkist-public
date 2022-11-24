import React from 'react';
import BlinklistIcon from '../../../assets/Blinklist.svg';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import AddBookFormDialog from '../../molecules/AddBook';

const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row'
}) as typeof Box;
const RightBox = styled(Box)({ marginLeft: 'auto' }) as typeof Box;
const Header: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container direction="row" justifyContent="center">
        <Grid xs={8}>
          <FlexBox>
            <FlexBox>
              <IconButton>
                <img
                  className="Blinkistlogo"
                  src={BlinklistIcon}
                  alt="BlinklistLogo.logo"
                />
              </IconButton>
              <Button startIcon={<SearchIcon />} color="info" />
              <Button variant="text" endIcon={<ExpandMoreIcon />} color="info">
                Explore
              </Button>
              <Button variant="text" color="info">
                My Library
              </Button>
            </FlexBox>
            <RightBox>
              <Button
                variant="contained"
                onClick={handleClickOpen}
                size="medium"
              >
                + Add Book
              </Button>
              <IconButton>
                <Avatar className="avatarIcon">A</Avatar>
              </IconButton>
            </RightBox>
          </FlexBox>
          <AddBookFormDialog open={open} handleClose={handleClose} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
