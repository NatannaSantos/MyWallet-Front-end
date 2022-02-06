import styled from "styled-components";
import Extract from "./Extract";

function ExtractList({ transaction,handleDeleteTransaction}) {

    if (transaction.length === 0) {
        return (
            <Subtitle>
                Não há registros de {<br />} entrada ou saída
            </Subtitle>
        );
    }

    return (
        transaction.map((transaction) => (
            <Extract
                key={transaction._id}
                {...transaction}
                handleDeleteTransaction={handleDeleteTransaction}                
            />
            

        ))
    );
}
const Subtitle = styled.p`
margin-top:160px;
font-size: 20px;
font-weight: 400;
color:#868686;
text-align: center;

line-height: 22px;
`

export default ExtractList;