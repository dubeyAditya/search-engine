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
    display: ${props => props.hidden ? 'none' : 'block' };
`

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px 5px 5px 5px;
  border-color: #f2f2f2;
  width:20rem;
  font-size: 1.5rem;
`