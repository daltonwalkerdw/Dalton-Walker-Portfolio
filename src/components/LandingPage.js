import React from "react"

import profilePic from "../imgs/Profile_pic.jpg"

import styled, { css } from 'styled-components'

const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  height: 100%;
  color: #EFF1F3;
  margin: 180px 0;
  flex-direction: column;
  
`

const ProfilePicture = styled.img `
border-radius: 50%
`

const LandingPage = () => {
return(
    
    <LandingContainer>
        <h1>Dalton Walker</h1>
        <ProfilePicture src={profilePic} height="300" width="300" />
        <p>Full-Stack Developer</p>
    </LandingContainer>
    
)
}

export default LandingPage;