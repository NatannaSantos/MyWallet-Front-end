import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerOne } from "../../components/Container/Container";
import Button from "../../components/FormComponents/Button";
import { Form } from "../../components/FormComponents/Form";
import { Input } from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { auth, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && auth.token) {
            navigate("/wallet");
        }
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data } = await api.login({ ...formData });
            setIsLoading(false);
            
            login(data);

            navigate("/wallet");
        } catch (error) {
            setIsLoading(false);
            alert('Erro ao fazer login');
        }

    }
    return (
        <ContainerOne>
            <h1>MyWallet</h1>
            <Form onSubmit={handleSubmit}>
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
                <Button type="submit" disabled={isLoading}>
                    Entrar
                </Button>
            </Form>
            <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
        </ContainerOne>

    );
}