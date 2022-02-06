import styled from "styled-components";

const Container=styled.div`
width:325px;
display: flex;
padding-right: 20px;
padding-left:15px;
padding-bottom: 10px;
padding-top:10px;
justify-content: space-between;
`
const Description=styled.div`
font-size:16px;
color: #000000;
display: flex;
`
const Date=styled.p`
font-size: 16px;
color: #C6C6C6;
margin-right: 10px;
`
const Value = styled.div`
font-size: 16px;
color: ${(props)=>props.type==='entry'?'#57AE26':'#C83022'};
display:flex;
`
export{
    Container,
    Description,
    Date,
    Value
}
