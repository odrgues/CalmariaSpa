import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import Banner from "./components/Banner";
import HighlightsSection from "./components/HighlightsSection";
import { highlightsData } from "./data/highlightsData";
import { CardsData } from "./data/cardsData";
import Cards from "./components/Cards";

import styled from "styled-components";

const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 4rem 8%;
  background: linear-gradient(to bottom, #e8f5c8 0%, #ffffff 100%);
  margin-top: 4rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />

      {highlightsData.map((item) => (
        <HighlightsSection
          key={item.title}
          image={item.image}
          title={item.title}
          text={item.text}
          icon={item.icon}
          reverse={item.reverse}
        />
      ))}

      <CardsContainer>
        {CardsData.map((item) => (
          <Cards
            key={item.title}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </CardsContainer>
    </>
  );
}

export default App;
