import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvitationHome from "./pages/InvitationHome";
import InvitationContent from "./pages/InvitationContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitationHome />} />
        <Route path="/content" element={<InvitationContent />} />
        <Route path="*" element={<InvitationHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
