import {
  Get,
  Controller,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) { }

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }
}
