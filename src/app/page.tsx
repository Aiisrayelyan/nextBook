import React from 'react';
import Link from 'next/link';
import { getAllBooks } from './lib/actions';
import { IBook } from './lib/types';
import styles from './page.module.css';

const HomePage: React.FC = async () => {
  const books: IBook[] = await getAllBooks();

  return (
    <div>
      <h1>Book List</h1>
      <div className={styles.bookGrid}>
        {books.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <img src={book.photo} alt={book.title} className={styles.bookImage} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <Link href={`/books/${book.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
