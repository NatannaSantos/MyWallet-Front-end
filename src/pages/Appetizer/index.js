import ContainerTwo from "../../components/Container/Containertwo";
import Button from "../../components/FormComponents/Button";
import { Input } from "../../components/FormComponents/Input";
import StyledHeader from "../../components/Header/StyledHeader";


export default function Appetizer() {
    return (
        <>
            <StyledHeader>
                <h1>Nova entrada</h1>
            </StyledHeader>
            <ContainerTwo>
                <Input
                type="text"
                placeholder="Valor"
                name="valor" 
                />
                 <Input
                type="text"
                placeholder="Descrição"
                name="descrição" 
                />      
                <Button>Salvar entrada</Button>          

            </ContainerTwo>
        </>
    );
}