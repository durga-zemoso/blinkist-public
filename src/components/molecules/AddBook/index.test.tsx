import { render, screen } from '@testing-library/react';
import AddBookFormDialog from '.';
import React from 'react';

describe('Add Book Component', () => {
  const handleClose = jest.fn();
  it('Render Add Book Elements', () => {
    render(<AddBookFormDialog open={true} handleClose={handleClose} />);
    const bookTitle = screen.getByText('Book Title');
    const imagePath = screen.getByText('Book Image');
    const minutesRead = screen.getByText('Minutes Read');
    const authorName = screen.getByText('Author Name');

    expect(bookTitle).toBeInTheDocument();
    expect(imagePath).toBeInTheDocument();
    expect(minutesRead).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', { name: 'Add Title' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Add Book' })
    ).toBeInTheDocument();
  });
});
