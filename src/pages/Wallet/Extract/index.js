import { ButtonDelete } from "../style";
import { Container, Description, Value, Date } from "./style";

function Extract({_id,date, description,value,type,handleDeleteTransaction}){
   const values=parseFloat(value.replace(',',',')).toFixed(2);
      
    return(
        <Container>
            <Description>
                <Date>{date}</Date>
                {description}
            </Description>
            <Value type={type}>R${values}
            <ButtonDelete onClick={()=>handleDeleteTransaction(_id)}>x</ButtonDelete>
            </Value>
        </Container>
    );
}
export default Extract;