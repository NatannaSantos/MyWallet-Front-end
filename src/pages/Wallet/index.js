import ContainerTwo from "../../components/Container/Containertwo";
import { ContainerButtons, StyledButton, StyledWallet } from "./style";
import StyledHeader from "../../components/Header/StyledHeader";
import Logout from "../../Assets/logout.svg";
import Add from "../../Assets/add.svg";
import Remove from "../../Assets/remove.svg";


export default function Wallet() {
    return (
        <>
            <StyledHeader>
                <h1>Olá,fulano</h1>
                <img alt="logout.svg" src={Logout} />
            </StyledHeader>
            <ContainerTwo>
                <StyledWallet>
                </StyledWallet>
                <ContainerButtons>
                    <StyledButton>
                        <img alt="add.svg" src={Add} />
                        <span>Nova {<br />} entrada </span>
                    </StyledButton >
                    <StyledButton >
                        <img alt="remove.svg" src={Remove} />
                        <span>Nova {<br />} saída</span></StyledButton>
                </ContainerButtons>
            </ContainerTwo>
        </>
    );
}