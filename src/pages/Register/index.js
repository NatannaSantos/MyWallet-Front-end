import { useState } from "react";
import { ContainerOne } from "../../components/Container/Container";
import Button from "../../components/FormComponents/Button";
import { Form } from "../../components/FormComponents/Form";
import { Input } from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";

export default function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    return (
        <ContainerOne>
            <h1>MyWallet</h1>
            <Form>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password"
                />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </ContainerOne>

    );
}