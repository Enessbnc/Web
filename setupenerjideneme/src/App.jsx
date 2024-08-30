import TopBar from "./components/AnaSayfa.jsx";
import { NavBar,Carousel } from "./components/AnaSayfa.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




export default function App() {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Carousel/>    
    </div>

  );
}


