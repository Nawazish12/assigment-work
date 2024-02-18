
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import PrivateLayout from "./layout/PrivateLayout";
import TodoListView from "./pages/todoPage/TodoListView";
import { RouteConfig } from "./services/types/AllTypes";
const App: React.FC = () => {

  const routes: RouteConfig[] = [

    {
      name: "todo",
      path: "/todo",
      component: TodoListView,
    },

  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {routes.map((route, index) => {
            const { path, } = route;
            const Component = route.component;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateLayout>
                    <Component />
                  </PrivateLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
