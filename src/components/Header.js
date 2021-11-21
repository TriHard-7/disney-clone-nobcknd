import React from 'react'
import styled from 'styled-components'

function Header() {
   return (

      <Nav>
         <Logo src="/images/logo.svg" />
         <NavMenu>
            <a>
               <img src="/images/home-icon.svg" />
               <span>HOME</span>
            </a>
            <a>
               <img src="/images/search-icon.svg" />
               <span>SEARCH</span>
            </a>
            <a>
               <img src="/images/watchlist-icon.svg" />
               <span>WATCHLIST</span>
            </a>
            <a>
               <img src="/images/original-icon.svg" />
               <span>ORIGINALS</span>
            </a>
            <a>
               <img src="/images/movie-icon.svg" />
               <span>MOVIES</span>
            </a>
            <a>
               <img src="/images/series-icon.svg" />
               <span>SERIES</span>
            </a>
         </NavMenu>
         <UserImg src="/images/logo.svg" />
      </Nav>

   )
}

export default Header

const Nav = styled.nav`
height :70px;
background : #090b13;
display : flex;
align-items : center;
padding : 0 36px;
overflow-x : hidden;
`

const Logo = styled.img`
width : 80px;


`

const NavMenu = styled.div`
display : flex;
flex : 1;//Meaning that give more importance to the NavMenu to take up all unwanted space so that it 
//pushes the login icon to the rightmost corner
margin-left : 20px;
align-items : center;
a {
   display : flex;
   align-items : center;
   padding : 0 12px;
   cursor : pointer;
   img {
     height : 20px; 
   }
   span {
      font-size : 13px;
      letter-spacing : 1.42px;
      position : relative;//WHy means we need a parent for the after(where we given the absolute) to cling onto

      &:after { //This after behaves like a div that will be added after the span(parent) element
         content : "hello";
         height : 2px;
         background : white;
         position : absolute; //This needs a relative object which is span in this case
         //top : 0;
         left : 0;
         right : 0;
         bottom : -6px;
         opacity : 0;
         transform-origin: left center;
         transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;//for the hover on the NavMenu items
         transform : scaleX(0);
      }
   }
    &:hover {
       span:after {
          transform : scaleX(1);
          opacity : 1;
       }
    }
}


`

const UserImg = styled.img`
width : 48px;
height : 48px;
border-radius : 50%;
cursor : pointer;
`