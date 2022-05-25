import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-bodyBackground font-mono">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
