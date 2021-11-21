import React from 'react'
import styled from 'styled-components'

function Detail() {
   return (
      <Container>
         <Background>
            <img src="/images/filler1.jpg" />
         </Background>
         <ImageTitle>
            <img src="/images/logo_trial1.svg" />
         </ImageTitle>
         <Controls>
            <PlayButton>
               <img src="/images/play-icon-black.png" />
               <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
               <img src="/images/play-icon-white.png" />
               <span>Trailer</span>
            </TrailerButton>
            <AddButton>
               <span>+</span>
            </AddButton>
            <GrpButton>
               <img src="/images/group-icon.png" />
            </GrpButton>
         </Controls>
         <Subtitle>
            2018 | 7m | Family, Fantasy, Kids, Entertainment
         </Subtitle>
         <Description>The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger</Description>
      </Container>
   )
}

export default Detail
const Container = styled.div`
  min-height : calc(100vh-70px);
  padding : 0 calc(3.5vw + 5px);
  position : relative;
//Reminder : You NEED to have a position : relative in a parent class if you would need a position : absolute in the child thing
`

const Background = styled.div`
  position : fixed;
  top : 0;
  left : 0;
  bottom : 0;
  right : 0;
  z-index : -1;
  opacity : 0.8;

  img {
     width : 100%;
     height : 100%;
     object-fit : cover;
     background : cover no-repeat center center;
  }

`
//Good recipe for image sizing(like a logo or a background) : Give the img a parent container and give height : 100%; width : 100%; object-fit : cover; BOOM!
const ImageTitle = styled.div`
   height : 30vh;
   min-height : 170px;
   width : 35vw;
   min-width : 200px;
   img {
  width : 100%;
  height : 100%;
  object-fit : contain;//NOT cover coz we dont need the logo to cover the viewport fully
   }

`
const Controls = styled.div`
   display : flex;
   align-items : center;

`
const PlayButton = styled.button`
   border-radius : 4px;
   font-size : 15px;
   display : flex;
   align-items : center;
   height : 52px;
   background-color : rgb(249,249,249);
   border : none;
   padding : 0 24px;
   margin-right : 24px;
   letter-spacing : 1.8px;
   cursor: pointer;

   &:hover {
      background : rgb(198,198,198);
   }
`
const TrailerButton = styled(PlayButton)`
  background : rgba(0,0,0,0.3);
  border : 1px solid rgb(249,249,249);
  text-transform : uppercase;
`
const AddButton = styled.button`
margin-right : 16px;
width : 44px;
height : 44px;
display : flex;
border-radius : 50%;
border : 2px solid white;
background-color : rgba(0,0,0,0.7);
     span {
   font-size : 30px;
   color : white;

}
cursor : pointer;
align-items : center;
justify-content : center;
`
const GrpButton = styled(AddButton)`
   background : rgb(0,0,0);

`

const Subtitle = styled.div`
   color : rgb(249,249,249);
   font-size : 15px;
   min-height : 20px;
   margin-top : 26px;
`
const Description = styled.div`
   line-height : 1.4;
   font-size : 20px;
   margin-top : 25px;
   color : rgb(249,249,249);
   max-width : 1000px;
`