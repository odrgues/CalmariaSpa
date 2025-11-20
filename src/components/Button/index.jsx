import { StyledButton } from "./styles";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  type,
  $formStyle,
  $subscribeStyle,
  $readMoreStyle,
}) => {
  if (type === "submit" || type === "button") {
    return (
      <StyledButton
        as="button"
        type={type}
        $formStyle={$formStyle}
        $subscribeStyle={$subscribeStyle}
        $readMoreStyle={$readMoreStyle}
      >
        {children}
      </StyledButton>
    );
  }

  // Botão como link
  return (
    <StyledButton
      as={Link}
      to={to}
      $formStyle={$formStyle}
      $subscribeStyle={$subscribeStyle}
      $readMoreStyle={$readMoreStyle}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
