import React from 'react';
import { MainWrapper,Grid } from './styled';
import { BookCard } from '../BookCard';
export const Main = ({userBookList}) => {
  return (
    <MainWrapper>
        <Grid>
          {userBookList.map((book)=> <BookCard key={book.title} book={book}/>)}
        </Grid>
    </MainWrapper>
  )
}