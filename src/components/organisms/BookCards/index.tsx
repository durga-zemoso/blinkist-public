import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import BlinkistTabs from '../../molecules/Tabs';
import { Grid } from '@mui/material';
import BookCard from '../../molecules/BookCard';
import axios from 'axios';
import { Book } from '../../models/models';
import styled from '@emotion/styled';
import baseTheme from '../../../themes';

const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  margin: baseTheme.spacing(4)
}) as typeof Box;
const MyLibraryTabs = styled(BlinkistTabs)({
  margin: baseTheme.spacing(2)
}) as typeof BlinkistTabs;
const BookCards: React.FC = (props) => {
  const getBookData = (): void => {
    void axios.get(`http://localhost:3031/books`).then((res) => {
      const bookarray = res.data;
      setBooks(bookarray);
    });
  };
  const [books, setBooks] = useState<Book[]>([]);
  const [tabStatus, setTabStatus] = useState<string>('Currently Reading');  
  const setBookDataWithStatus = (bookStatus: string): void => {
    // setBooks(globalBooks.filter((book:Book) => book.status===bookStatus));
    void axios
      .get(`http://localhost:3031/books?status_like=` + bookStatus)
      .then((res) => {
        const bookarray = res.data;
        setBooks(bookarray);
        setTabStatus(bookStatus);
      });
  };
  useEffect(() => {
    getBookData();
  }, []);
  return (
    <div>
      <MyLibraryTabs
        tabdetails={['Currently Reading', 'Finished']}
        onTabChange={setBookDataWithStatus}
      ></MyLibraryTabs>

      <FlexBox>
        <Grid
          item
          container
          spacing={4}
          columns={{
            xs: 4,
            sm: 8,
            md: 12
          }}
        >
          {books.map((book) => (
            <Grid item xs={4} key={book.id}>
              <BookCard
                book_details={{
                  id: book.id,
                  book_title: book.book_title,
                  book_image: book.book_image,
                  book_author: book.book_author,
                  minutes_Read: book.minutes_Read,
                  category: book.category
                }}
                refreshBookSet={setBookDataWithStatus}
                tabStatus={tabStatus}
              />
            </Grid>
          ))}{' '}
        </Grid>
      </FlexBox>
    </div>
  );
};

export default BookCards;
