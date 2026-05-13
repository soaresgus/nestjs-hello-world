import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.books.length + 1,
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  findOne(id: number): Book {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return book;
  }

  delete(id: number): Book {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    this.books = this.books.filter((book) => book.id !== id);

    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto): Book {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    const updatedBook: Book = {
      ...book,
      ...updateBookDto,
    };

    this.books = this.books.map((book) =>
      book.id === id ? updatedBook : book,
    );

    return updatedBook;
  }
}
