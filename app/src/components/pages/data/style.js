import style from 'styled-components'

export const Data_styled = style.section`
  padding:3vh;
  
  //se não setar uma altura limite o scroll não funciona.
  height:50vh;
  width:96%;

  overflow-y: scroll;

  .card{
    width:100%;
    box-shadow: 0 0 5px #2976E6;;
    margin-bottom:10px;
    padding:7px;
    text-align:center;

    border-radius:6px;
  }

  .data{
    display:flex;
    justify-content:space-evenly;
  }
`;

