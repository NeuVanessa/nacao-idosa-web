import styled from 'styled-components'

export const Wrapper = styled.header`
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcY-YdlECXB7E_QlfwlRi86pjy9Lxm9QAusA&usqp=CAU')
    center center no-repeat;
  background-size: cover;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  background: #f2b94a;
`
export const Navbar = styled.div`
  display: flex;
  list-style: none;
  margin-right: 2rem;
  align-items: center;
  position: relative;
  left: 200px;
`
export const Alink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    color: #ffff;
    background: #86e998;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
  }
`
export const ContainerInfo = styled.div`
  position: relative;
  width: 80%;
  height: 200px;
  margin: 0 auto 0 auto;
  background: red;
  bottom: 40px;
  z-index: 3;
  flex-direction: row;
  display: flex !important;
`

export const Paragraph = styled.p``
export const BaseList = styled.ul``

export const List = styled.li``
export const Text = styled.h1``
export const TextButton = styled.h5``
