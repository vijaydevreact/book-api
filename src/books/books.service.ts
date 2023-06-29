import { Injectable } from '@nestjs/common';
import { Book } from './entity/book.entity';


@Injectable()
export class BooksService {


  getAllBooks = (): Book[] => {

    return [{ id: "1", title: "firstBook", description: "book details", dicount: "10%", price: 200 },
    { id: "2", title: "secondBook", description: "book details", dicount: "20%", price: 300 },
    { id: "3", title: "thirdBook", description: "book details", dicount: "40%", price: 400 },
    { id: "4", title: "4thBook", description: "book details", dicount: "40%", price: 400 },
    { id: "5", title: "secondBook", description: "book details", dicount: "20%", price: 300 },
    { id: "6", title: "thirdBook", description: "book details", dicount: "40%", price: 400 },
    { id: "7", title: "4thBook", description: "book details", dicount: "40%", price: 400 },
    { id: "8", title: "secondBook", description: "book details", dicount: "20%", price: 300 },
    { id: "9", title: "thirdBook", description: "book details", dicount: "40%", price: 400 },
    { id: "10", title: "4thBook", description: "book details", dicount: "40%", price: 400 },
    ]
  };

}
