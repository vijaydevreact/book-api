import { Injectable } from '@nestjs/common';
import { Book } from './entity/book.entity';


@Injectable()
export class BooksService {


  getAllBooks = (): Book[] => {

    return
    [
      { id: "1", title: "레이블라우스", description: "book details", dicount: "10%", price: '57,600' },
      { id: "2", title: "레이블라우스", description: "book details", dicount: "10%", price: '57,600' },
      { id: "3", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600' },
      { id: "4", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600' },
      { id: "5", title: "레이블라우스", description: "book details", dicount: "20%", price: '57,600' },
      { id: "6", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600' },
      { id: "7", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600' },
      { id: "8", title: "레이블라우스", description: "book details", dicount: "20%", price: '57,600' },
      { id: "9", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600' },
      { id: "10", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600' },
    ]
  };

}
