import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import WhatYouLearn from "./components/WhatYouLearn/WhatYouLearn";
import WhyChooseAi from "./components/WhyChooseAi/WhyChooseAi";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <WhyChooseAi />
      <WhatYouLearn />

      <Footer />
    </div>
  );
}

export default App;
