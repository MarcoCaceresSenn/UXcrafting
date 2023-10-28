import './App.css';
import AppRoutes from './app/routes/AppRoutes';
import NavBar from './component/navbar-component/navbar.component.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
