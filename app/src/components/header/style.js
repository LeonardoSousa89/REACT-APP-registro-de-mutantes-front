import style from 'styled-components'

export const Header_styled = style.section`
  background: #2976E6;
  color:white;
  height:18vh;

  text-align: center;

  
  h1{
    font-size: 12vh;
    font-family: fantasy;
    letter-spacing: 1px;
  }
  
  @media screen and (max-width: 992px) {
    height:12vh;

    h1{
      font-size: 8vh;
    }
  }
  
  @media screen and (max-width: 710px) {
    height:6vh;

    h1{
      font-size: 4vh;
    }
  }
`;

