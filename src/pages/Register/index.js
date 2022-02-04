import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerOne } from "../../components/Container/Container";
import Button from "../../components/FormComponents/Button";
import { Form } from "../../components/FormComponents/Form";
import { Input } from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";
import api from "../../services/api";

export default function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);


        if (formData.confirmPassword === formData.password) {
            try {
                delete formData.confirmPassword;
                await api.register({
                    ...formData
                });
                setIsLoading(false);
                navigate("/");

            } catch (error) {
                setIsLoading(false);
                alert('Erro ao realizar cadastro');
            }
        } else {
            alert("Senha inválida");
        }

    }

    return (
        <ContainerOne>
            <h1>MyWallet</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    disabled={isLoading}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    Cadastrar
                </Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </ContainerOne>

    );
}