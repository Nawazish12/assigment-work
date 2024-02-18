
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import PrivateLayout from "./layout/PrivateLayout";
import TodoListView from "./pages/todoPage/TodoListView";
import { RouteConfig } from "./services/types/AllTypes";
import ErrorPage from "./pages/pageNotFound/ErrorPage";
const App: React.FC = () => {

  const routes: RouteConfig[] = [
    // all others application routes 
    {
      id: 1,
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
                key={route?.id ?? index}
                path={path}
                element={
                  <PrivateLayout>
                    <Component />
                  </PrivateLayout>
                }
              />
            );
          })}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
