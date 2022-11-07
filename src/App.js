import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Routes/Route';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <RouterProvider router={Route} />
  );
}

export default App;
