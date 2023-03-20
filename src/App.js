import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import PasswordReset from "./pages/Auth/PasswordReset";
import Dashboard from "./pages/Dashboard/Dashboard";
import Plan from "./pages/Dashboard/Plan";
import Wallet from "./pages/Dashboard/Wallet";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";
import TopUp from "./pages/Dashboard/TopUp";
import Support from "./pages/Dashboard/Support";
import ContactSales from "./pages/Others/ContactSales";
import { Help } from "./pages/Others/Help";
import { HelpPage } from "./pages/Others/HelpPage";
import { OnBoarding } from "./pages/Others/OnBoarding";
import { Plans } from "./pages/Others/Plans";
import { PrivacyPolicy } from "./pages/Others/PrivacyPolicy";
import { TermsConditions } from "./pages/Others/TermsConditions";
import { Instructions } from "./pages/TemplateResources/Instructions";
import { Licenses } from "./pages/TemplateResources/Licenses";
import { StyleGuide } from "./pages/TemplateResources/StyleGuide";
import { DetailCustomer } from "./pages/Dashboard/DetailCustomer";
import { EditDashboard } from "./pages/Dashboard/EditDashboard";
import { EmailView } from "./pages/Dashboard/EmailView";
import { FourOFour } from "./pages/Dashboard/FourOFour";
import { FourOOne } from "./pages/Dashboard/FourOOne";
import { Search } from "./pages/Dashboard/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="password_reset" element={<PasswordReset />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="detailcustomer" element={<DetailCustomer />} />
          <Route path="editdashboard" element={<EditDashboard />} />
          <Route path="emailview" element={<EmailView />} />
          <Route path="fourofour" element={<FourOFour />} />
          <Route path="fouroone" element={<FourOOne />} />
          <Route path="plan" element={<Plan />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="setting" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="topup" element={<TopUp />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="contactsales" element={<ContactSales />} />
          <Route path="help" element={<Help />} />
          <Route path="helppage" element={<HelpPage />} />
          <Route path="onboarding" element={<OnBoarding />} />
          <Route path="plans" element={<Plans />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termscondition" element={<TermsConditions />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="licenses" element={<Licenses />} />
          <Route path="styleguide" element={<StyleGuide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
