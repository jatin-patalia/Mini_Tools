import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UnitConverter from "../pages/tools/UnitConverter";
// import Layout from "../pages/layout/Layout";
import PasswordGenerator from "../pages/tools/PasswordGenerator";
import Layout from "../pages/layout/Layout";
import JsonFormatter from "../pages/tools/JsonFormatter";
import TextCaseConverter from "../pages/tools/TextCaseConverter";
import NumberConverter from "../pages/tools/NumberConverter";
import QRCodeGenerator from "../pages/tools/QrCodeGenerator";
import AgeCalculator from "../pages/tools/AgeCalculator";
import ImageCompressor from "../pages/tools/ImageCompressor";
import RandomNameWheel from "../pages/tools/RadomNameWheel";
import TwitterShareGenerator from "../pages/tools/TweeterLinkShareGenerator";
import AboutUS from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import FacebookLinkGenerator from "../pages/tools/FacebookLinkGenerator";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import Disclaimer from "../pages/Disclaimer";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUS />} />

        <Route path="/unit_converter" element={<UnitConverter />} />
        <Route path="/password_generator" element={<PasswordGenerator />} />
        <Route path="/json_formatter" element={<JsonFormatter />} />
        <Route path="/text_case_converter" element={<TextCaseConverter />} />
        <Route path="/number_converter" element={<NumberConverter />} />
        <Route path="/qr_code_generator" element={<QRCodeGenerator />} />
        <Route path="/age_calculator" element={<AgeCalculator />} />
        <Route path="/image_compressor" element={<ImageCompressor />} />
        <Route path="/random_name_wheel" element={<RandomNameWheel />} />
        <Route
          path="/tweeter_link_generator"
          element={<TwitterShareGenerator />}
        />
        <Route
          path="/facebook_link_generator"
          element={<FacebookLinkGenerator />}
        />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_condition" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms_conditions" element={<TermsConditions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
