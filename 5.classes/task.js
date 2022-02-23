class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  set state(curState) {
    if (curState > 100)
      curState = 100;
    if (curState < 0)
      curState = 0;
    this._state = curState;
  }
  get state() {
    return this._state;
  }
  fix() {
    this.state = this.state * 1.5;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    if (book.state > 30)
      this.books.push(book); 
  }
     findBookBy(type, value) {  
      let answer = {};
      library.books.forEach(function(item, key) {      
        if (item[type] === value) {
        
          answer = item;
        }         
      });
      
        if (Object.keys(answer).length > 0) {
          return answer;
        }
        else
        {
          return null;
        }
    } 
  giveBookByName(bookName) {    
    let answer = {};
    library.books.forEach(function(item, key) {      
      if (item.name === bookName) {
        answer = library.books.splice(key, 1);
    
      }         
    });
    if (answer.length > 0) {
      return answer;
    } 
    else
    {
      return null;
    }
  }
  
}
