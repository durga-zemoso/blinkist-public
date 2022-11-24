export interface Book {
  id: number;
  book_title: string;
  book_image: string;
  book_author: string;
  minutes_Read: number;
  category: string;
  status?: string;
}

export interface lazy_image {
  alt?: string;
  height?: string;
  src: string;
  width?: string;
}
