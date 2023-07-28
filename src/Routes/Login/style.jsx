import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 97.5vh;
min-width:100vw;
background-color:#725a9a;
h1{
  font-size: 50px;
  color: white;
  margin-bottom:20px;
  text-align:center;
}

`;

export const Form = styled.form`
display: flex;
padding:3rem;
flex-direction: column;
align-items: center;
justify-content:center;
background-color:#3f3354;
border-radius:20px;
width:100%;
max-width: 450px;
box-shadow: inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1), 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3);
/* gap: 30px 0px; */
label{
color: #C5C5C5;
font-size: 20px;
font-weight: light;
margin-bottom:5px;
}
`;