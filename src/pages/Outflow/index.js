import ContainerTwo from "../../components/Container/Containertwo";
import Button from "../../components/FormComponents/Button";
import { Input } from "../../components/FormComponents/Input";
import StyledHeader from "../../components/Header/StyledHeader";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import api from "../../services/api";
import { Form } from "../../components/FormComponents/Form";



export default function Outflow() {
    const { auth } = useAuth();
    const [outflowData, setOutflowData] = useState({ value: '', description: '', type: 'outflow', userId: auth._id })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setOutflowData({ ...outflowData, [e.target.name]: e.target.value, date: dayjs().format('DD/MM') })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            await api.transaction({ ...outflowData });
            setIsLoading(false);
            navigate("/wallet");
        } catch (error) {
            setIsLoading(false);
            alert('Erro ao realizar cadastro de transação. Verifique se o valor contém duas casas decimais e se todos os campos estão preenchidos');
        }
    }
        return (
            <>
                <StyledHeader>
                    <h1>Nova saída</h1>
                </StyledHeader>
                <ContainerTwo>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            placeholder="Valor"
                            name="value"
                            value={outflowData.value}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                        <Input
                            type="text"
                            placeholder="Descrição"
                            name="description"
                            value={outflowData.description}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                        <Button type="submit" disabled={isLoading}>Salvar saída</Button>
                    </Form>

                </ContainerTwo>
            </>
        );
    }