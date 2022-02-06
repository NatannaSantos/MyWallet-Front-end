import { Container, Description, Value, Date } from "./style";

function Extract({date, description,value,type}){
   const values=parseFloat(value.replace(',','.')).toFixed(2);
   
    return(
        <Container>
            <Description>
                <Date>{date}</Date>
                {description}
            </Description>
            <Value type={type}>R${values}</Value>
        </Container>
    );
}
export default Extract;