import * as S from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <div>
        <p>Desenvolvido por Danilo Machuca de Souza &copy; {currentYear}</p>
      </div>
    </S.Footer>
  );
};

export default Footer;
