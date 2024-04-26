import { useState } from 'react';
import { Link } from 'wouter';
import './navbar.css';

export const Navbar = () => {
  const [menuClass, setMenuClass] = useState('topnav');

  const getResponsiveMenu = () => {
    setMenuClass(previusClass => 
      previusClass === 'topnav' ? 
      previusClass + ' responsive' : 'topnav');
  }

  return (
    <div className={menuClass} id='topnav'>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/create'>Create Product</Link>
      <a href="javascript:void(0)" className='icon' onClick={getResponsiveMenu}>
        <i className='fa fa-bars'></i>
      </a>
    </div>
  )
}
