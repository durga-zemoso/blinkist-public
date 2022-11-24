import { render, screen } from '@testing-library/react';
import Banner from '.';
import React from 'react';

describe('Add Book Component', () => {
  test('Render Add Book Elements', () => {
    render(<Banner />);
    const title = screen.getByText('Explore Books on entrepreneurship');
    expect(title).toBeInTheDocument();
  });
});

export {};
