import Cards from "../../components/Cards";
import { servicesData } from "../../data/servicesPageData";
import { PageWrapper, ServicesTitle, CardsGrid } from "./styles";

const ServicesPage = () => {
  return (
    <PageWrapper>
      <ServicesTitle>Nossos Serviços</ServicesTitle>

      <CardsGrid>
        {servicesData.map((item) => (
          <Cards
            key={item.id}
            // category={item.category}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </CardsGrid>
    </PageWrapper>
  );
};

export default ServicesPage;
