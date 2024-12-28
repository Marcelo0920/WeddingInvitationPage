import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvitationHome from "./pages/InvitationHome";
import InvitationContent from "./pages/InvitationContent";
import OurHistory from "./pages/OurHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitationHome />} />
        <Route path="/content" element={<InvitationContent />} />
        <Route path="/ourhistory" element={<OurHistory />} />
        <Route path="*" element={<InvitationHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
