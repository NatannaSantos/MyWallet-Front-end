import { Container } from "../../components/Container/Container";
import Button from "../../components/FormComponents/Button";
import { Form } from "../../components/FormComponents/Form";
import { Input } from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";

export default function Register() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <Form>
            <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                />
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
                 <Input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password"
                />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>

    );
}