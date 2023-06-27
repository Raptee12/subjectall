import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Staff from './pages/Staff';
import NotificationPage from './pages/NotificationPage';
import UpdateTeacher from './pages/admin/UpdateTeacher';
import AddTeacher from './pages/admin/AddTeacher';
function App() {
  const {loading} = useSelector((state) => state.alerts)
  return (
  <>
    <BrowserRouter>
    {loading ? (<Spinner/>) :(
    <Routes>
    <Route path='/'
     element={
     <ProtectedRoute>
       <HomePage />
     </ProtectedRoute>
    } />
    
    <Route path='/Staff'
     element={
     <ProtectedRoute>
       <Staff/>
     </ProtectedRoute>
    } />

    <Route path='/admin/UpdateTeacher'
     element={
     <ProtectedRoute>
       <UpdateTeacher/>
     </ProtectedRoute>
    } />

    <Route path='/admin/AddTeacher'
     element={
     <ProtectedRoute>
       <AddTeacher/>
     </ProtectedRoute>
    } />

<Route path='/Notification'
     element={
     <ProtectedRoute>
       <NotificationPage/>
     </ProtectedRoute>
    } />

    <Route path='/login' 
    element={
      <PublicRoute>
        < Login/>
      </PublicRoute>
    } />
    <Route path='/register' 
    element={
      <PublicRoute>
        <Register />
      </PublicRoute>
    } />
  </Routes>
    )}
    
    </BrowserRouter>
  </>
  );
}

export default App;
