import { useState, useCallback } from "react";
import AgeGate from "./components/AgeGate";
import Home from "./pages/Home";

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = useCallback(() => {
    setAccepted(true);
  }, []);

  if (!accepted) {
    return <AgeGate onAccept={handleAccept} />;
  }

  return <Home />;
}

export default App;
