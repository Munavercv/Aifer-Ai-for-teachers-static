import AdditionalBenefits from "./components/AdditionalBenefits/AdditionalBenefits";
import CallToAction from "./components/CallToAction/CallToAction";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatYouLearn from "./components/WhatYouLearn/WhatYouLearn";
import WhyChooseAi from "./components/WhyChooseAi/WhyChooseAi";
import WhyThisCourse from "./components/WhyThisCourse/WhyThisCourse";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <WhyChooseAi />
      <WhatYouLearn />
      <HowItWorks />
      <CourseDetails />
      <WhyThisCourse />
      <AdditionalBenefits />
      <Testimonials />
      <CallToAction />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
