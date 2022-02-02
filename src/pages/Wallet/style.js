import styled from "styled-components";

const StyledWallet=styled.div`
width: 326px;
height: 446px;
background-color: #FFFFFF;
border-radius: 5px;
`
const ContainerButtons=styled.div`
width: 375px;
padding: 25px;
display: flex;
justify-content: space-between;
`
const StyledButton=styled.div`
width: 155px;
height: 114px;
font-size: 17px;
font-weight: 700;
padding:10px;
color:#FFFFFF;
border-radius: 5px;
border:none;
background-color: #A328D6;
display: flex;
align-items: left;
flex-direction: column;

img{
    width:22px;
    height: 22px;
    margin-bottom: 30px;
}
`
export {
    StyledWallet,
    ContainerButtons,
    StyledButton
}