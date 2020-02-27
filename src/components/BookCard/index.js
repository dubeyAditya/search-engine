import React from "react";
import {BookCardWrapper, TextWrapper, TitleWrapper,SmallText} from './styled';

export const BookCard = ({book}) => {
    return (<BookCardWrapper>
        <TitleWrapper>{book.title}</TitleWrapper>
        <SmallText>by: {book.author}</SmallText>
        <br/>
        <TextWrapper>{book.summary}</TextWrapper>
    </BookCardWrapper>)
}