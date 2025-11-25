import { StyledButton } from "./styles";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  type,
  variant, // new: 'form' | 'subscribe' | 'read-more'
  $formStyle,
  $subscribeStyle,
  $readMoreStyle,
}) => {
  // Backwards-compatible mapping: if explicit boolean props are not provided,
  // derive them from `variant`.
  const formProp = $formStyle ?? variant === "form";
  const subscribeProp = $subscribeStyle ?? variant === "subscribe";
  const readMoreProp = $readMoreStyle ?? variant === "read-more";
  if (type === "submit" || type === "button") {
    return (
      <StyledButton
        as="button"
        type={type}
        $formStyle={formProp}
        $subscribeStyle={subscribeProp}
        $readMoreStyle={readMoreProp}
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
      $formStyle={formProp}
      $subscribeStyle={subscribeProp}
      $readMoreStyle={readMoreProp}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
