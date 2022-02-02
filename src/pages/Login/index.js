import { ContainerOne } from "../../components/Container/Container";
import Button from "../../components/FormComponents/Button";
import { Form } from "../../components/FormComponents/Form";
import { Input } from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";

export default function Login() {
    return (
        <ContainerOne>
            <h1>MyWallet</h1>
            <Form>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                />
                <Button type="submit">Entrar</Button>
            </Form>
            <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
        </ContainerOne>

    );
}