import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../Services/book.service';
import { response } from 'express';

@Component({
  selector: 'app-book',
  standalone: false,
  
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit  {
  bookform! : FormGroup;
  myBooks : any[]=[];
  myBooks1 : any[]=[];

  constructor(private _book:BookService) {}
  ngOnInit() {
        this.bookform=new FormGroup({
        'bookid': new FormControl(''),
        'bookname': new FormControl(''),
        'author': new FormControl(''),
        'available': new FormControl('')

    });
  }
  Add()
  {
      const mybookid=this.bookform.get('bookid')?.value;
      const mybookname=this.bookform.get('bookname')?.value;
      const myauthor=this.bookform.get('author')?.value;
      const avail=this.bookform.get('available')?.value;

      this.myBooks.push({
          bookid:mybookid,
          bookname:mybookname,
          author:myauthor,
          available:avail

      });
      
      this.myBooks1.push({
        bookid:mybookid,
        bookname:mybookname,
        author:myauthor,
        available:avail === 'true'? true : false

    });

  }
  save()
  {
    this._book.savBook(this.myBooks).subscribe(sub=>{
      console.log(sub);
    },
    error=>{
      console.log("Error",error);
    }
  );
  }
  get()
  {
    this._book.getBook().subscribe(sub=>{
      console.log(sub);
    },
    error=>{
      console.log("Error",error);
    }
  );
  }

  get1()
  {
    this._book.getBook1().subscribe({
    next: (data) => {
        console.log(data)
    },
    error: (error) => {
      console.log(error)
    },
    complete: () => {
      console.log('complete')
    }

    })

  }

  save1()
  {
    this._book.savBook1(this.myBooks1).subscribe({
    next: (data) => {
        console.log(data)
    },
    error: (error) => {
      console.log(error)
    },
    complete: () => {
      console.log('complete')
    }
    })  
  }

}

