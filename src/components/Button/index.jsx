import { StyledButton } from "./styles";

const Button = ({ children, to, type, $formStyle }) => {
  if (type === "submit" || type === "button") {
    return (
      <StyledButton as="button" type={type} $formStyle={$formStyle}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton to={to} $formStyle={$formStyle}>
      {children}
    </StyledButton>
  );
};

export default Button;
