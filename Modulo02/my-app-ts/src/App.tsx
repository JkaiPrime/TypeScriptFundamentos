import { Card } from "./Components/Card";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  return (
    <>
    <Header/>
    <Card 
      id= {1} 
      details="Josias"/>
    <Card 
      id = {2}
      details="Josias"/>
    <Card 
      id = {3}
      details="Josias"/>
      <Footer/>
    </>
  );
}

export default App;
