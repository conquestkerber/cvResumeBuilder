import PersonalDataForm from "./components/PersonalDataForm";
import Resume from "./components/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Experience from "./components/Experience";
import AdditionalForm from "./pages/AdditionalForm";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <PersonalDataForm /> },
    { path: "/resume", element: <Resume /> },
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
        <p>CV Maker </p>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
}

export default App;
