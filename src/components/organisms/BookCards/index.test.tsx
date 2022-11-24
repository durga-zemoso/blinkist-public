import { render, screen } from '@testing-library/react';
import BookCards from '.';
import axios from 'axios';
import React from 'react';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BookCards Component', () => {
  it('Render Tabs', () => {
    render(<BookCards />);
    const tabCurrently = screen.getByText('Currently Reading');
    const tabFinished = screen.getByText('Finished');

    expect(tabCurrently).toBeInTheDocument();
    expect(tabFinished).toBeInTheDocument();
  });
  it('Render Books', () => {
    mockedAxios.get.mockResolvedValue({
      json: async () => [
        {
          id: 1,
          book_title: 'Bring Humans To Work',
          book_image:
            'https://s3-alpha-sig.figma.com/img/7a8d/2547/2a61cffee838cf588c90ce1fcfaedae7?Expires=1668988800&Signature=EFHkscsTVoIMo2vTNpMpMcfRj3Xmwd6oey~UkAh6W6zOCiCU6N0utAFyaQbCxMcOSJovSvAvx7z-yS2-8ihVesR8fvJn6tVLkDIcu8D~QdPwXAuZs3ffjaLf3tubxY3prVArBboXCKUed-1sopFLRQeVj~VjAW0SRaY~InOnuH6OPK4OP0w0OXixznwElrdaiYT07At8vSRd0bzI6nQ23KafWc74QnHvLPOiu~iuVrs~ijSm5N9gj3-GnxkQckzeVCxazSySs4cRFzHdDzWbZx4gVI1xyavc6CrxfMqHvSUoZprJWDDIjMq6eO4TnFr~XP4L838wldfD3UQy9hKrKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          book_author: 'Erica Keswin',
          minutes_Read: 13,
          category: 'Productivity',
          status: 'Currently Reading'
        }
      ]
    });
    //        render(<BookCards/>);
    const tabCurrently = screen.getByText('Currently Reading');
    const tabFinished = screen.getByText('Finished');

    expect(tabCurrently).toBeInTheDocument();
    expect(tabFinished).toBeInTheDocument();
    // const bookList = screen.getAllByRole('BookCard');
    // expect(bookList).toHaveLength(1);
    // expect(bookList[0]).toHaveTextContent('Bring Humans To Work');
    // expect(bookList[1]).toHaveTextContent('Erica Keswin');
  });
});
