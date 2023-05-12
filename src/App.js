import PersonalDataForm from "./components/PersonalDataForm";
import Resume from "./components/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Experience from "./components/Experience";
import AdditionalForm from "./pages/AdditionalForm";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <PersonalDataForm /> },
    { path: "/resume", element: <Resume /> },
    { path: "/template1", element: <Template1 /> },
    { path: "/template2", element: <Template2 /> },
    {
      path: "/experience",
      element: <Experience />,
      children: [
        { path: "/experience/:selectedItem", element: <AdditionalForm /> },
      ],
    },
  ]);
  return (
    <div>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
}

export default App;
