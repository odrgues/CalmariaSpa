import HighlightsSection from "../../components/HighlightsSection";
import Banner from "../../components/Banner";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import ContactSection from "../../components/ContactSection";
import { highlightsData } from "../../data/highlightsData";
import NavBar from "../../components/NavBar";

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

      <SubscriptionBanner />
      <ContactSection />
    </>
  );
};

export default HomePage;
