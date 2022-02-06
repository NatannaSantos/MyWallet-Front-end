import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerTwo from "../../components/Container/Containertwo";
import Button from "../../components/FormComponents/Button";
import { Form } from "../../components/FormComponents/Form";
import { Input } from "../../components/FormComponents/Input";
import StyledHeader from "../../components/Header/StyledHeader";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import dayjs from "dayjs"
import useTransaction from "../../hooks/useTransaction";



export default function Entry() {
    const { auth } = useAuth();
    const { transaction } = useTransaction();
    const [entryData, setEntryData] = useState({ value: '', description: '', type: 'entry', userId: auth._id })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setEntryData({ ...entryData, [e.target.name]: e.target.value, date: dayjs().format('DD/MM') })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            await api.transaction({ ...entryData });
            setIsLoading(false);
            navigate("/wallet");
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            alert('Erro ao realizar cadastro de transação. Verifique se o valor contém duas casas decimais e se todos os campos estão preenchidos');
        }
    }
    return (
        <>
            <StyledHeader>
                <h1>Nova entrada</h1>
            </StyledHeader>
            <ContainerTwo>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Valor"
                        name="value"
                        onChange={handleChange}
                        value={entryData.value}
                        disabled={isLoading}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Descrição"
                        name="description"
                        onChange={handleChange}
                        value={entryData.description}
                        disabled={isLoading}
                        required
                    />
                    <Button type="submit" disabled={isLoading}>Salvar entrada</Button>
                </Form>

            </ContainerTwo>
        </>
    );
}