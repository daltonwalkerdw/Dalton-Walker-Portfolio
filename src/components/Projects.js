import React from "react"
import styled, { css } from 'styled-components'
import  gigapet  from "../imgs/Gigapet.PNG"


const ProjectCard = styled.div`
display: flex;
border: 3px solid #E5E059;
padding: 100px, 75px;
flex-direction: column;
color: white;
width: 22rem;
height: 26rem;
`
const ProjectContainer = styled.div`
display: flex;

`
const CardImg = styled.img`

border:3px solid white;
margin: 20px;

`

const ParagraphBreak = styled.div`
line-height: 1.3rem;
word-wrap: break-word;
padding:20px;
`

const CustomA = styled.a `
  color: #E5E059;
  text-align: center;
`

const Projects = () => {

    return(
        <ProjectContainer>
<ProjectCard>
   
    <a href="https://my-giga-pet.netlify.com/"><CardImg src={ gigapet } height="200px" width="300px"  /></a>
    <ParagraphBreak>
    lets parents sign in to track Gigapet based on what foods their child ate and in turn let the 
        child watch their Gigapet grow with them!
        </ParagraphBreak>
        
   <CustomA href="https://github.com/Build-Week-Gigapet-5/Front-End.git" target='_blank'>https://github.com/Build-Week-Gigapet-5/Front-End.git</CustomA>
   
</ProjectCard>
        </ProjectContainer>
    )
}

export default Projects