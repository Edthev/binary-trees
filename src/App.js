import "./App.css";
import Header from "./components/header/header";
import InputPage from "./pages/inputPage/inputPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
   return (
      <div className="App">
         <Header />
         <Router>
            <Routes>
               <Route path="/" element={<InputPage />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
