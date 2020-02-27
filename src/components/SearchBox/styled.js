import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
 position: relative;
 display: inline-block;
`

export const SearchItemWrapper = styled.div`
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    display: ${props => props.hidden ? 'none' : 'block'};
    max-height: 16rem;
    overflow-y:scroll;
`

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px 5px 5px 5px;
  width:16rem;
  border:none;
  font-size: 0.9rem;
  background: #f2f2f2;
  -webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-ms-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
  
  &:focus{
    outline:0;
    background: #fff;
    width: 20rem;
  }

  @media (max-width: 576px) {
     &  {
      transition :none;
     }
     &:focus{
      outline:0;
      background: #fff;
      width: 16rem;
  }
 }

`