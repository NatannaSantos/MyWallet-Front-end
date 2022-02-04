import { StyledWallet } from "./style"
import styled from "styled-components";

function ExtractList() {
    return(
    <StyledWallet>
        <Subtitle>
            Não há registros de {<br />} entrada ou saída
        </Subtitle>
    </StyledWallet>
    );
}
const Subtitle = styled.p`
margin-top:160px;
font-size: 20px;
font-weight: 400;
color:#868686;
text-align: center;

line-height: 22px;
`

export default ExtractList;