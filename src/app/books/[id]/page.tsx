import React from 'react';
import { getBookById } from '../../lib/actions';
import { IBook } from '../../lib/types';
import styles from './bookPage.module.css';

interface BookPageProps {
  params: {
    id: string;
  };
}

const BookPage: React.FC<BookPageProps> = async ({ params }) => {
  const book: IBook | null = await getBookById(Number(params.id));

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <div className={styles.bookDetail}>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <img src={book.photo} alt={book.title} className={styles.bookImage} />
    </div>
  );
};

export default BookPage;
