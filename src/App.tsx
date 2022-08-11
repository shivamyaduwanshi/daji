import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'routers';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
       <BrowserRouter>
          <Routers />
       </BrowserRouter>
       <Footer />
    </div>
  );
}

export default App;
