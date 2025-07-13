// src/App.jsx
import { useState } from "react";
import PasscodePage from "./pages/PasscodePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");

  return unlocked ? (
    <DashboardPage passcode={passcode} />
  ) : (
    <PasscodePage onUnlock={setUnlocked} setPasscode={setPasscode} />
  );
}

export default App;
