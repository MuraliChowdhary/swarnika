import { useAuth } from './contexts/AuthContext';
import PublicLayout from './components/layout/PublicLayout';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  const { isAuthenticated } = useAuth();

   
  return isAuthenticated ? <DashboardLayout /> : <PublicLayout />;
}

export default App;