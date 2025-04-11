import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Cart from './components/Cart';
import {Routes, Route} from "react-router-dom";
const App = () => {
    const [cart, setCart] = useState([]);
    return(
        <div>
           <Header cart={cart} />
           <Routes>
                 <Route path="/" element={<Content cart={cart} setCart={setCart} />}/>
                 <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
           </Routes>

            <Footer />
           
           
           

        </div>
    );
};

export default App;