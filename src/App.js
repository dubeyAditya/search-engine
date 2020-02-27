import React, { useState } from 'react';
import { ApplicationWrapper } from "./styled";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Library } from "../src/context/libraryContext";
import booksData from "./utility/data";

function App() {

  const [userBookList, setUserBookList] = useState([]);

  const addBook = (book) => {
    const hasBook = userBookList.find((userBook) => userBook.title === book.title);
    if (hasBook) {
      alert("You Already added this book");
    }
    else {
      const books = [...userBookList, book];
      setUserBookList(books);
    }
  }

  return (
    <ApplicationWrapper>
      <Library.Provider value={booksData}>
        <Header onSubmit={addBook} />
        <Main userBookList={userBookList} />
        <Footer />
      </Library.Provider>
    </ApplicationWrapper>
  );
}

export default App;
