import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, withRouter }  from "react-router-dom"
import styled, { css } from 'styled-components'

const Container = styled.nav`
 display: flex;
 justify-content: center;
 font-size: 1.2rem;
 padding: 20px 0;
 width: 100%;
 border-bottom: solid black 1px;
 display: flex;
 justify-content: center;
 background-color: #E5E059;
 justify-content: space-evenly;
`



const Header = (props) => {

    return(
        <Container>
        <Link className="styledLink" to="/">Home</Link>
        <Link className="styledLink" to="/projects">Projects</Link>
        <Link className="styledLink" to="/skills">Skills</Link>
        <Link className="styledLink" to="/">Contact</Link>
    </Container>
    )
    
}

export default withRouter(Header);