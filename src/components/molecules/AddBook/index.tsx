import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import baseTheme from '../../../themes';
import axios from 'axios';
import CustomizedSnackbars from '../../atoms/Snackbar';

const AddBookDialog = styled(Dialog)({
  margin: baseTheme.spacing(4),
  padding: baseTheme.spacing(4)
}) as typeof Dialog;
const BookTextField = styled(TextField)({ width: '500px' }) as typeof TextField;
const AddBookFormDialog: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = (props) => {
  const [bookTitle, setBookTitle] = React.useState<string>('');
  const [imagePath, setImagePath] = React.useState<string>('');
  const [authorName, setAuthorName] = React.useState<string>('');
  const [minutesRead, setMinutesRead] = React.useState<number>(0);
  const [snackbarOpenStatus, setSnackbarOpenStatus] =
    React.useState<boolean>(false);
  const handleAddBook = (): void => {
    const book = {
      book_title: bookTitle,
      book_image: imagePath,
      book_author: authorName,
      minutes_Read: minutesRead,
      category: 'Politics',
      status: 'Currently Reading'
    };
    void axios.post('http://localhost:3031/books/', book);
    setBookTitle('');
    setImagePath('');
    setAuthorName('');
    setMinutesRead(0);
    props.handleClose();
    // setBookDataWithStatus('Currently Reading'());
    setSnackbarOpenStatus(true);
  };
  const titleChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setBookTitle(event.target.value);
  };
  const pathChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setImagePath(event.target.value);
  };
  const authorNameChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setAuthorName(event.target.value);
  };
  const minutesReadChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setMinutesRead(Number(event.target.value));
  };
  return (
    <div>
      <AddBookDialog
        open={props.open}
        onClose={props.handleClose}
        maxWidth="md"
      >
        <DialogTitle variant="subtitle1">Add a New Book</DialogTitle>
        <DialogContent>
          <Typography>Book Title</Typography>
          <BookTextField
            fullWidth
            label="Add Title"
            variant="outlined"
            value={bookTitle}
            onChange={titleChangeHandler}
          />
          <Typography>Book Image</Typography>
          <BookTextField
            id="outlined-basic"
            label="Image url"
            variant="outlined"
            value={imagePath}
            onChange={pathChangeHandler}
          />
          <Typography>Author Name</Typography>
          <BookTextField
            id="outlined-basic"
            label="Add Author Name"
            variant="outlined"
            value={authorName}
            onChange={authorNameChangeHandler}
          />
          <Typography>Minutes Read</Typography>
          <BookTextField
            id="outlined-basic"
            label="Add Minutes"
            variant="outlined"
            value={minutesRead}
            onChange={minutesReadChangeHandler}
          />

          <DialogActions>
            <Button onClick={props.handleClose} variant="outlined">
              <Typography variant="h6">Cancel</Typography>
            </Button>
            <Button onClick={handleAddBook} variant="contained">
              <Typography variant="h6">Add Book</Typography>
            </Button>
          </DialogActions>
        </DialogContent>
      </AddBookDialog>
      <CustomizedSnackbars
        reason={'New Book Added'}
        openStatus={snackbarOpenStatus}
      ></CustomizedSnackbars>
    </div>
  );
};

export default AddBookFormDialog;
