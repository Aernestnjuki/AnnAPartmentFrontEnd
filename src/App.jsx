
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage"
import AddProjects from "./pages/AddProjects"
import ProjectPage from "./pages/ProjectPage"

const App = () => {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/add-notes" element={<AddProjects />} />
      <Route path="/project-detail" element={<ProjectPage />} />
    </Route>
  ))



  return <RouterProvider router={router} />
};

export default App;
