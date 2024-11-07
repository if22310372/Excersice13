import Header from "./component/Header/Header";
import Hero from "./component/Hero/hero";
import Client from "./component/Clients/Clients";
import Feature  from "./component/Features/Features";
import Pricing from "./component/Pricing/Pricing";
import Footer from "./component/Footer/Footer";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
  <main className="site-content">
    <Hero />
    <Client />
    <Feature />
    <Pricing />
  </main>
  <Footer />
</div>

  );
}


export default App;





















