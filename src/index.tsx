import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {FilmCreation} from "./components/creation/FilmCreation";
import { CustomerCreation } from "./components/creation/CustomerCreation";
import { RentalsCreation } from "./components/creation/RentalsCreation";
import SearchMovie from "./components/search/FilmSearch";
import SearchCustomer from "./components/search/CustomerSearch";
import SearchRentals from "./components/search/RentalsSearch";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>

    <Routes>
      
      <Route path='/' element={<App/>}>
        <Route path='novoFilme' element={<FilmCreation/>}/>
        <Route path='novoCliente' element={<CustomerCreation/>}/>
        <Route path='novoAluguel' element={<RentalsCreation/>}/>
        <Route path='buscarFilmes' element={<SearchMovie/>}/>
        <Route path='buscarClientes' element={<SearchCustomer/>}/>
        <Route path='buscarAlugueis' element={<SearchRentals/>}/>


      </Route>

    </Routes>

  </BrowserRouter>
);
