import Cards from "../../components/Cards";
import { servicesData, serviceSliderImages } from "../../data/servicesPageData";
import { PageWrapper, ServicesTitle, CardsGrid } from "./styles";
import ImageSlider from "../../components/ImageSlider";

const ServicesPage = () => {
  return (
    <PageWrapper>
      <ImageSlider images={serviceSliderImages} interval={6000} />

      <ServicesTitle>Nossos Serviços</ServicesTitle>

      <CardsGrid>
        {servicesData.map((item) => (
          <Cards
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </CardsGrid>
    </PageWrapper>
  );
};

export default ServicesPage;
