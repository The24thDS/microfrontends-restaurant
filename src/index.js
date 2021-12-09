import ReactDOM from "react-dom";
import App from "./App";

window.render_restaurants = (elementId, history, host) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(elementId)
  );
};

window.unmount_restaurants = (elementId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
};

if (document.getElementById("restaurants-container") === null) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
