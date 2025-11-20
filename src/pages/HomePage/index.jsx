import styled from "styled-components";

import HighlightsSection from "../../components/HighlightsSection";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import ContactSection from "../../components/ContactSection";

import { highlightsData } from "../../data/highlightsData";
import { CardsData } from "../../data/cardsData";
import NavBar from "../../components/NavBar";

// const CardsContainer = styled.section`
//   display: flex;
//   justify-content: center;
//   gap: 2.5rem;
//   padding: 4rem 8%;
//   background: linear-gradient(to bottom, #dbd6d3, #ffffff);

//   margin-top: 4rem;

//   @media (max-width: 1024px) {
//     flex-wrap: wrap;
//     max-width: 460px;
//   }
// `;

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Banner />

      {highlightsData.map((item) => (
        <HighlightsSection
          key={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          icon={item.icon}
          reverse={item.reverse}
        />
      ))}

      {/* <CardsContainer>
        {CardsData.map((item) => (
          <Cards key={item.id} title={item.title} text={item.text} />
        ))}
      </CardsContainer> */}

      <SubscriptionBanner />
      <ContactSection />
    </>
  );
};

export default HomePage;
