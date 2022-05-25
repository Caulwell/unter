import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Login from "./pages/Login";

function App() {
  return (
    
    <Router>
      <div className="flex flex-col w-screen h-screen bg-bodyBackground font-mono">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
