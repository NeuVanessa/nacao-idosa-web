import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: #86e998;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: 250ms ease-in-out;
  width: 100px;
  color: #fff;

  &:hover {
    padding: 8px 20px;
    transition: all 0.4 ease-in-out;
    color: #f2b94a;
    transition: 250ms;
    background: white;
    background: #86e998;
  }
`
