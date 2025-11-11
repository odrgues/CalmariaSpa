import styled from "styled-components";
import bannerImg from "../../assets/image-banner.png";

const Gradient = styled.div``;

const Banner = () => {
  return (
    <Gradient>
      <img src={bannerImg} alt="Banner do Calmaria Spa"></img>
      Boas-vindas ao seu refúgio de paz e bem-estar
      <button>Quero relaxar!</button>
    </Gradient>
  );
};

export default Banner;
