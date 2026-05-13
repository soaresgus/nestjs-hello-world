import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: string[] = [
    'The Great Gatsby',
    'To Kill a Mockingbird',
    '1984',
    'Pride and Prejudice',
    'The Catcher in the Rye',
    'The Lord of the Rings',
    'The Hobbit',
    'Fahrenheit 451',
    'Moby',
  ];

  findAll(): string[] {
    return this.books;
  }
}
