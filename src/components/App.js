import Banner from "../components/Banner";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
// import "../styles/Navbar.css";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Banner />
      <h1>Home</h1>
      <p>lorem ipsum...</p>
      <Cart />
    </div>
  );
}

export default App;
