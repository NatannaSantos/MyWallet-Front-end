import ContainerTwo from "../../components/Container/Containertwo";
import { ContainerButtons, StyledButton } from "./style";
import StyledHeader from "../../components/Header/StyledHeader";
import Logout from "../../Assets/logout.svg";
import Add from "../../Assets/add.svg";
import Remove from "../../Assets/remove.svg";
import ExtractList from "./ExtractList";


export default function Wallet() {

    return (
        <>
            <StyledHeader>
                <h1>Olá,Fulano</h1>
                <img alt="logout.svg" src={Logout} />
            </StyledHeader>
            <ContainerTwo>
               <ExtractList />
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

