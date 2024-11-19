import { useEffect, useState } from "react";

import InvitationHome from "./pages/InvitationHome";
import InvitationContent from "./pages/InvitationContent";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Función para actualizar la ruta cuando cambie
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Escuchar cambios en la URL
    window.addEventListener("popstate", onLocationChange);

    // Limpieza del evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const renderContent = () => {
    switch (currentPath) {
      case "/":
        return <InvitationHome onNavigate={navigate} />;
      case "/content":
        return <InvitationContent onNavigate={navigate} />;
      default:
        return <InvitationHome onNavigate={navigate} />;
    }
  };

  return <>{renderContent()}</>;
}

export default App;
