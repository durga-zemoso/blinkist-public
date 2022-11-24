import ClockIcon from '../../../assets/clock.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Divider } from '@mui/material';
import IconWithText from '../../atoms/Icon';
import { Book } from '../../models/models';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import React, { ReactElement } from 'react';

const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}) as typeof Box;

const BookCard: React.FC<{
  book_details: Book;
  refreshBookSet: (bookStatus: string) => void;
  tabStatus: string;
}> = (props): ReactElement => {
  const onClickFinishHandler = (
    _event: React.MouseEvent<HTMLElement>,
    book: Book,
    tabStatus: string
  ): void => {
    if (tabStatus === 'Currently Reading') {
      book.status = 'Finished';
      void axios.put('http://localhost:3031/books/' + book.id.toString(), book);
      props.refreshBookSet('Currently Reading');
    } else if (tabStatus === 'Finished') {
      book.status = 'Currently Reading';
      void axios.put('http://localhost:3031/books/' + book.id.toString(), book);
      props.refreshBookSet('Finished');
    }
  };

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.book_details.book_image}
            alt="book"
          />
          <CardContent className="cardContent">
            <Typography variant="subtitle1" component="div">
              {props.book_details.book_title}{' '}
            </Typography>
            <Typography variant="body1">
              {props.book_details.book_author}{' '}
            </Typography>
            <IconWithText
              text={props.book_details.minutes_Read.toString() + '-minute read'}
              path={ClockIcon}
            ></IconWithText>
          </CardContent>
        </CardActionArea>
        <Divider />
        <FlexBox>
          <Button
            size="large"
            color="secondary"
            onClick={(e) =>
              onClickFinishHandler(e, props.book_details, props.tabStatus)
            }
          >
            {props.tabStatus === 'Currently Reading'
              ? 'Finished'
              : 'Read Again'}
          </Button>
        </FlexBox>
      </Card>
    </>
  );
};

export default BookCard;
