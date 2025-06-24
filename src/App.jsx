import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"
import SiteMap from "./pages/Sitemap.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsCondition.jsx";
import CaseStudyProfessional from "./pages/CaseStudyProfessional.jsx";
import CaseStudyEcommerce from "./pages/CaseStudyEcommerce.jsx";
import CaseStudyBrandIdentity from "./pages/CaseStudyBrandIdentity.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='*' element={<ErrorPage/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path='/casestudy-professional' element={<CaseStudyProfessional />} />
          <Route path='/casestudy-ecommerce' element={<CaseStudyEcommerce />} />
          <Route path='/casestudy-brand-identity' element={<CaseStudyBrandIdentity />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
