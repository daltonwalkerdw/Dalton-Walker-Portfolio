import React from "react"
import styled from "styled-components";

const SkillElement = styled.h2`
  font-size: 1.7rem;
`
const Container = styled.div`
color: #EFF1F3;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
padding: 60px 0 0 0;
`
const SkillContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 25%;
 border: 10px double #E5E059;
    margin: 0 20px;
    padding: 35px;
    border-radius: 5%;
`
const Header = styled.h2`
  font-size: 2rem;
  color: #EFF1F3;
  display: inline;
`

const SkillName = styled.h2`
  font-size: 2rem;
  color: #EFF1F3;
  display: inline;
  text-align: center;
`

const Skills = () => {
    return (
        <div>

            {/*  Front End */}
            <Container>
                <SkillContainer>
                    <SkillName>Front-End</SkillName>

                    <SkillElement>Html5</SkillElement>
                    <SkillElement>Css3</SkillElement>
                    <SkillElement>Less</SkillElement>
                    <SkillElement>JavaScript</SkillElement>
                    <SkillElement>GIT</SkillElement>
                    <SkillElement>React</SkillElement>
                    <SkillElement>Redux</SkillElement>
                </SkillContainer>
                {/* Back End */}
                <SkillContainer>
                    <SkillName>Back-End</SkillName>

                    <SkillElement>Node.js</SkillElement>
                    <SkillElement>Sql/Knex</SkillElement>
                    <SkillElement>Express</SkillElement>
                </SkillContainer>
            </Container>
        </div>
    )
}

export default Skills;
