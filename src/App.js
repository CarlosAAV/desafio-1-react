
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';
import Title from './header'
import Footer from './footer';
import Cards from './card'

function App() {
  return (
    <div className="body-app">

      {/*header*/}
      <Title Title="Galeria de imagenes react" />



      {/*cards*/}
      <div className="position-card">
        <Cards Title="Hello kitty" Image="http://placekitten.com/200/300" Text="esta imagen es de un gatito :3" className="kittyGap" />
        <Cards Title="Hello kitty" Image="http://placekitten.com/200/300" Text="esta imagen es de un gatito :3" />
        <Cards Title="Hello kitty" Image="http://placekitten.com/200/300" Text="esta imagen es de un gatito :3" />
      </div>


      {/*footer*/}
      <Footer Footer="Derechos reservados" Text="galeria de imagenes de gatitos :3" />


    </div>



  );
}

export default App;
