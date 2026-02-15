import { useState, useCallback } from "react";
import { Route, Switch } from "wouter";
import AgeGate from "./components/AgeGate";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = useCallback(() => {
    setAccepted(true);
  }, []);

  if (!accepted) {
    return <AgeGate onAccept={handleAccept} />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
    </Switch>
  );
}

export default App;
