import { InputContainer } from './styles'; 


export  const Input = ({value}) => {
  return (
    <InputContainer>
        <input disabled value={value}/>
    </InputContainer>
    );
}
