
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
 display:flex;
 justify-content: space-between;
 padding: 0 2rem 0 2rem ;
 background-color: #3D8BDA;
 color:#ffff;
 align-items:center;

 @media (max-width: 576px) {
     & .heading {
         display :none;
     }
 }

`
export const ActionPanel = styled.div`
 display:flex;
 &:first-child {
     flex:1;
 }
 @media (max-width: 576px) {
     & {
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        flex:1;
     }
 }
`

export const Button = styled.button`
    color: black;
    background-color: #e8e8e8;
    padding: 0.5rem;
    margin-left: 0.5rem;
    width: 4rem;
    font-size: 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    
    &:focus{
        outline:none;
    }
`