import styled from "styled-components";

const StyledWallet=styled.div`
width: 326px;
height: 446px;
background-color: #FFFFFF;
border-radius: 5px;
position: relative;
`
const StyledExtract=styled.div`
width:326px;
height:345px;
overflow-y: scroll;
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
const Balance=styled.div`
width: 326px;
padding: 10px;
display: ${props=>props.transaction.length===0?"none":"flex"};
background-color: #FFFFFF;
border-radius:5px;
justify-content: space-between;
position:absolute;
bottom:5px;
`
const BalanceDescription=styled.p`
font-size: 17px;
font-weight: 700;

`
const BalanceValue=styled.div`
font-size: 17px;
color:${(props)=>props.isNegative?'red':'green'};
`
const ButtonDelete=styled.p`
font-size: 16px;
color:#C6C6C6;
margin-left:5px;
cursor: pointer;
`
export {
    StyledWallet,
    ContainerButtons,
    StyledButton,
    StyledExtract,
    Balance,
    BalanceDescription,
    BalanceValue,
    ButtonDelete
}