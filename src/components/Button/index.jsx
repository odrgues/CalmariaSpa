import { StyledButton } from "./styles";

const Button = ({ children, to, type, $formStyle, $subscribeStyle }) => {
  if (type === "submit" || type === "button") {
    return (
      <StyledButton
        as="button"
        type={type}
        $formStyle={$formStyle}
        $subscribeStyle={$subscribeStyle}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      to={to}
      $formStyle={$formStyle}
      $subscribeStyle={$subscribeStyle}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
