import React, { useState, useContext } from 'react';
import { HeaderWrapper, ActionPanel, Button } from './styled';
import { SearchBox } from '../SearchBox';
import { Library } from '../../context/libraryContext';

export const Header = ({onSubmit}) => {
    const [bookId, setBookId] = useState(null);

    const { summaries, titles, authors } = useContext(Library);

    const [clearText, setClearText] = useState(false);

    const findBook = () => {
        if(bookId !== null)
        {
            let bookDetails = {};
            bookDetails["title"] = titles[bookId];
            bookDetails["summary"] = summaries[bookId].summary;
            bookDetails["author"] = authors[bookId].author;
            onSubmit(bookDetails);
            setClearText(true);
        }
    }

    const getBookInfo = (id) =>{
      setBookId(id);
      setClearText(false);
    }

    return (<HeaderWrapper>
        <div className='heading'>
            <h2>Unibuddy</h2>
        </div>
        <ActionPanel>
            <SearchBox onTitleSelect={getBookInfo} reset={clearText} ></SearchBox>
            <Button onClick={findBook}>Add</Button>
        </ActionPanel>

    </HeaderWrapper>)

}  