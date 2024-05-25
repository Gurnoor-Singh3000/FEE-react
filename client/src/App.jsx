import TopBar from "./components/topbar/Topbar"; // Ensure case matches
import Homepage from "./pages/homepage/Homepage"; // Corrected import path
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} /> {/* Corrected component name */}
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/write" element={currentUser ? <Write /> : <Register />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
