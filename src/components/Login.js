import React from 'react'
import styled from 'styled-components'
function Login() {
   return (
      <Container>
         <Content>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>
               Get All There for $12.99/month
            </SignUp>
            <Description>
               Get Premier Access to Encanto for just $10.99 with a Disney+ subscription.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
         </Content>
      </Container>
   )
}

export default Login


const Container = styled.div`

   /* position : relative; */
   min-height : (100vh-70px);
   display : flex;
   align-items : center;
   justify-content : center;

   &:before{
      background-position : top;
      background-size : cover;
      background-repeat : no-repeat;
      background-attachment : fixed;
      background-image : url("/images/login-background.jpg"); 
      content : "";
      position : absolute;
      top : 0;
      left : 0;
      right : 0;
      bottom : 0;
      z-index : -1;
      opacity : 0.8;
   }
`
const Content = styled.div`
   max-width : 650px;
   padding : 200px 40px;
   width : 70%;
   display : flex;
   flex-direction : column;
   align-items : center;
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
  text-transform : uppercase;
  width : 100%; //650px which is defined in the container
  background-color : #0063e5;
  font-weight : 400;
  padding : 17px 0;
  color : #f9f9f9;
  border-radius : 4px;
  text-align : center;
  letter-spacing : 1.5px;
  margin-top : 8px;
  margin-bottom : 12px;
  transition : all 250ms;
  cursor: pointer;
  &:hover {
     background : #0483ee;
  }
`
const Description = styled.p`
  font-size : 11px;
  letter-spacing : 1.5px;
  text-align : center;
  line-height : 1.5; 
  margin-bottom : 30px;

`
const CTALogoTwo = styled.img`
   width : 90%;

`