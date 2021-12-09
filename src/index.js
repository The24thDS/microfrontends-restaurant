import ReactDOM from "react-dom";
import App from "./App";

window.render_restaurants = (
  elementId,
  history,
  host,
  { browsePath, basename }
) => {
  ReactDOM.render(
    <App
      history={history}
      browsePath={browsePath}
      basename={basename}
      key="restaurants-app"
    />,
    document.getElementById(elementId)
  );
};

window.unmount_restaurants = (elementId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
};

if (document.getElementById("restaurants-container") === null) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
