import List from './pages/List'
import './App.css';
import {Route, Routes} from "react-router-dom";
import Tour from "./pages/Tour";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path={''} element={<List/>}></Route>
        <Route path={'tour/:id'} element={<Tour/>}></Route>
        <Route path={'add-tour'} element={<Add/>}></Route>
        <Route path={'edit-tour/:id'} element={<Edit/>}></Route>
      </Routes>
    </>
  );
}

export default App;
