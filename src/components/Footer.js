import React from "react"
import { BrowserRouter as Router, Route, Link, Switch }  from "react-router-dom"
import styled, { css } from 'styled-components'

const FooterContainer = styled.footer`
position: fixed;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid #E5E059;
  display: flex;
  justify-content: center;
  background-color: #E5E059;

  
`



const Header = () => {
    return(
        <FooterContainer>
       <a  href="https://github.com/daltonwalkerdw" target='_blank' class="fa fa-github"></a>
       <a  href="https://www.linkedin.com/in/dalton-walker-codes/" target='_blank' class="fa fa-linkedin"></a>
   </FooterContainer>
    )
   
}

export default Header;