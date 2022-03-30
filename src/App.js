import { Routes, Route, Link } from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from "./pages/Recipe";
import Layout from "./components/Layout";

function App () {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='category/:name' element={<Category/>}/>
                    <Route path='meal/:id' element={<Recipe/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
