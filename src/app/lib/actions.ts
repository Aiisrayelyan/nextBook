import { promises as fs } from 'fs';
import path from 'path';
import { IBook } from './types';

const booksFilePath = path.join(process.cwd(), 'src', 'app', 'lib', 'books.json');

export async function getAllBooks(): Promise<IBook[]> {
  const data = await fs.readFile(booksFilePath, 'utf-8');
  return JSON.parse(data) as IBook[];
}

export async function getBookById(id: number): Promise<IBook | null> {
  const books = await getAllBooks();
  const book = books.find((book) => book.id === id);
  return book || null;
}
