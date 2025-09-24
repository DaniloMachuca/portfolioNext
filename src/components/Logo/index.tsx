import { TypeAnimation } from "react-type-animation";
import { LinkStyled } from "./styles";
const Logo = () => {
  return (
    <>
      <LinkStyled href="#">
        <TypeAnimation
          sequence={["<DaniloMachuca />"]}
          wrapper="h1"
          cursor={true}
        />
      </LinkStyled>
    </>
  );
};

export default Logo;
