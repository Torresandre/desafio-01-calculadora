import { ButtonContainer } from "./styles";

export  const Button = ({label, onclick}) => {
  return (
    <ButtonContainer onclick={onclick} type="button">
        {label}
    </ButtonContainer>
  );
}

