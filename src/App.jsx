import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import Banner from "./components/Banner";
import HighlightsSection from "./components/HighlightsSection";
import { highlightsData } from "./data/highlightsData";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      {highlightsData.map((item, index) => (
        <HighlightsSection
          key={index}
          image={item.image}
          title={item.title}
          text={item.text}
          icon={item.icon}
          reverse={item.reverse}
        />
      ))}
    </>
  );
}

export default App;
