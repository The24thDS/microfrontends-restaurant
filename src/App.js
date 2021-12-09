import { NavLink, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import CustomBrowserRouter from "./CustomBrowserRouter";

const App = ({ history = createBrowserHistory() }) => {
  return (
    <CustomBrowserRouter history={history}>
      <nav>
        Restaurant Page Nav: <NavLink to="restaurants">Restaurants</NavLink>{" "}
        <NavLink to="restaurants/1">Restaurant 1</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="restaurants/" element={<p>Restaurants Page</p>} />
          <Route path="restaurants/*" element={<p>Restaurant subpage</p>} />
        </Routes>
      </div>
    </CustomBrowserRouter>
  );
};

export default App;
