import MenuItem from '@/pages/MenuItem';
import SubMenu from '@/pages/SubMenu';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function NavBar() {
  const [navBar, setNav] = useState(false);

  function handleNavBar() {
    setNav((navBar) => !navBar);
  }
  const menu_items = [
    { title: 'About us', id: 1 },
    { title: 'Products', id: 2 },
    { title: 'Services', id: 3 },
    { title: 'Article', id: 4 },
    {
      title: 'Account',
      submenu: [
        { title: 'Login', id: 5 },
        { title: 'SignUp', id: 6 },
        { title: 'Contact us', id: 7 },
      ],
      id: 8,
    },
  ];

  return (
    <header className="bg-gray-400">
      <nav className="max-w-[1240px] mx-auto flex justify-between items-center">
        <ul className="text-black items-center hidden sm:flex">
          {menu_items.map((item) => {
            return <MenuItem item={item} />
          }
            
          )}
        </ul>

        {/* Mobile NavBar */}
        <div className="block sm:hidden z-10">
          {navBar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        <div className={navBar ? "sm:hidden absolute flex justify-center items-center text-center w-full bg-gray-400" : "sm:hidden absolute flex justify-center items-center text-center"} onClick={handleNavBar}>
         
        <ul className="text-black items-center">
            {menu_items.map((item) => {
             return <MenuItem item={item} />
            })}
        
        </ul>
        
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

// {nav ? <ul className="text-black  items-center">
//           {menu_items.map((item) => (
//             <Link>{item.title}</Link>,
//             <MenuItem item={item} />,
//             <SubMenu submenu={item.submenu} showmenu={nav} />
//           ))}
//         </ul> : <AiOutlineMenu size={20}/> }