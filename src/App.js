
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import UploadForm   from './components/UploadForm';
import InternshipResources from './components/InternshipResources';
import RecentInternships from './components/RecentInternships';
import PreviousInternship from './components/PreviousInternship';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/StudentDashboard',
    element: <StudentDashboard />
  },
  {
    path: '/FacultyDashboard',
    element: <FacultyDashboard />
  },
  {
    path: '/UploadForm',
    element: <UploadForm />
  },
  {
    path: '/InternshipResources',
    element: <InternshipResources/>
  },
  {
    path: '/RecentInternships',
    element: <RecentInternships/>
  },
  {
    path: '/PreviousInternship',
    element: <PreviousInternship/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
