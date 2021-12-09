import { NavLink, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import CustomBrowserRouter from "./CustomBrowserRouter";

const App = ({
  history = createBrowserHistory(),
  browsePath = "",
  basename = "",
}) => {
  return (
    <CustomBrowserRouter basename={basename} history={history}>
      <nav>
        Restaurant Page Nav: <NavLink to="/">Root</NavLink>{" "}
        <NavLink to="1">Restaurant 1</NavLink>{" "}
        <NavLink to="/../">Back to the main page</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<p>Restaurants Page</p>} />
          <Route path="/*" element={<p>Restaurant subpage</p>} />
        </Routes>
      </div>
    </CustomBrowserRouter>
  );
};

export default App;
