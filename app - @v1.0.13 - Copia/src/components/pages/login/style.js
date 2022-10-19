import style from 'styled-components'

export const Login_styled = style.section`

   height:100vh;
   width:100vw;

   display:flex;
   justify-content:center;

   .container{
        height:40vh;
        width:60vw;
        max-width:60vw;

        margin-top:100px;

        text-align:center;
        
        display:flex;
        align-items:center;
        flex-direction: column;
        justify-content:space-evenly;

        box-shadow:0px 0px 5px black;
        border-radius:6px;
   }

   .cadastre-se{
        text-decoration:none;
        font-weight: bold;
        color: #2976E6;
   }

   .btn, .size{
    width:100%;
   }

   .btn{
    margin-top:30px;
   }

`;

