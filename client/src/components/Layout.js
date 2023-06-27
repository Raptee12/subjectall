import React from 'react';
import '../styles/LayoutStyles.css';
import { adminMenu, userMenu } from '../data/data';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Badge, message} from 'antd';
const Layout = ({children}) => {
  const {user} = useSelector(state => state.user)
  const location = useLocation();
  const Navigate = useNavigate();
   //logout function
   const handleLogout = () => {
    localStorage.clear()
    message.success('Logout Successfully')
    Navigate('/login');
   }
  //rendering menu list
  const SidebarMenu = user?.IsAdmin ? adminMenu : userMenu;
  return (
    <>
     <div className='main'>
        <div className='layout'>
            <div className='sidebar'>
              <div className='logo'>
                   <h6>Subject Allocation System</h6>
                   <hr />
              </div>
              <div className='menu'>
                {SidebarMenu.map((menu) => {
                  const isActive = location.pathname === menu.path;
                  return (
                      <>
                          <div className={`menu-item ${isActive && 'active'}`}>
                            <i className={menu.icon}></i>
                            <Link to={menu.path}>{menu.name}</Link>
                          </div>
                      </>
                  );
                })}
                <div className={`menu-item`} onClick={handleLogout}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <Link to='/login'>Logout</Link>
                          </div>
              </div>
            </div>
            <div className='content'>
                <div className='header'>
                  <div className='header-content' style={{cursor:'pointer'}}>
                  <Badge count={user && user.Notification.length} onClick = {() => {Navigate('/Notification')}}
                  
                  >
                  <i class="fa-solid fa-bell"></i>
                  </Badge>
                  
                  <Link to='/student'>{user?.name}</Link>
                  </div>
                  </div>
                <div className='body'>{children}</div>  
            </div>
        </div>
     </div>
    
    </>
  );
};

export default Layout;