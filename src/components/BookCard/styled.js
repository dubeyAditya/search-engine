import styled from 'styled-components';

export const BookCardWrapper = styled.div`
 background-color:#ffff;
 border: 1px solid #e8e8e8;
 padding: 1rem;
`

export const TextWrapper = styled.div`
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   font-family: Arial, Helvetica, sans-serif;
`

export const TitleWrapper = styled.div`
 font-size: 1.5rem;
 font-family:'Franklin Gothic Medium', Arial, sans-serif;
 font-weight:bold;
 margin-bottom: 0.25rem;
`

export const SmallText = styled.div`
 font-family: 'Courier New', Courier, monospace;
 font-size: 1rem;
 text-decoration: firebrick;
`