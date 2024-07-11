import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { IBook } from '../../../../src/app/lib/types';

const booksFilePath = path.join(process.cwd(), 'src', 'app', 'lib', 'books.json');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const data = await fs.readFile(booksFilePath, 'utf-8');
    const books: IBook[] = JSON.parse(data);
    res.status(200).json(books);
  } else {
    res.status(405).end();
  }
}

export default handler;
