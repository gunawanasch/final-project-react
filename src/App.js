import "./App.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import Layout from "./layout";
import ListProduct from "./components/ListProduct";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

const routeList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ListProduct />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment/:total",
        element: <Payment />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routeList} />
    </Provider>
  );
}

export default App;
