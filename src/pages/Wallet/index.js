import ContainerTwo from "../../components/Container/Containertwo";
import { Balance, BalanceDescription, BalanceValue, ContainerButtons, StyledButton, StyledExtract, StyledWallet } from "./style";
import StyledHeader from "../../components/Header/StyledHeader";
import Logout from "../../Assets/logout.svg";
import Add from "../../Assets/add.svg";
import Remove from "../../Assets/remove.svg";
import ExtractList from "./ExtractList";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../services/api";


export default function Wallet() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [balance, setBalance] = useState(null);
    const [isNegative,setIsNegative]=useState(false)
    let finalBalance = 0;

    useEffect(() => {
        if (!auth || !auth.token) {
            navigate('/');
            return;
        }
        handleLoadTransaction();
    }, []);
    function handleLoadTransaction() {
        const promise = api.getTransaction(auth.token);
        promise.then((response) => {
            const transactionUser = response.data;
            setTransaction(transactionUser);
            console.log(response.data);
            setIsLoading(false);

            transactionUser.map(transactions => {
                if (transactions.type === 'entry') {
                    finalBalance += parseFloat(transactions.value.replace(',', '.'));
                } else {
                    finalBalance -= parseFloat(transactions.value.replace(',', '.'));
                }
            })
           
            setBalance(parseFloat(finalBalance).toFixed(2));
            if(finalBalance<0){
                setIsNegative(true);
            }
        });
        promise.catch((error) => {
            console.log(error.response);
            setIsLoading(true);
        });

    }

    if (isLoading) {
        return <h1>Carregando...</h1>;
    }
   

    function handleDeleteUser() {
        delete auth.token;
        navigate('/');
    }

    return (

        <>
            <StyledHeader>
                <h1>Olá,{auth.name}</h1>
                <img alt="logout.svg" src={Logout} onClick={handleDeleteUser} />
            </StyledHeader>
            <ContainerTwo>
                <StyledWallet>
                    <StyledExtract>
                        <ExtractList transaction={transaction} />
                    </StyledExtract>
                    <Balance>
                        <BalanceDescription>SALDO</BalanceDescription>
                        <BalanceValue isNegative={isNegative}>R${balance}</BalanceValue>
                    </Balance>
                </StyledWallet>
                <ContainerButtons>
                    <StyledButton onClick={() => navigate('/entry')}>
                        <img alt="add.svg" src={Add} />
                        <span>Nova {<br />} entrada </span>
                    </StyledButton >
                    <StyledButton onClick={() => navigate('/outflow')}>
                        <img alt="remove.svg" src={Remove} />
                        <span>Nova {<br />} saída</span>
                    </StyledButton>
                </ContainerButtons>
            </ContainerTwo>
        </>
    );
}

