import React, { useState } from 'react';
import Image from 'next/image';
import SubMenu from './SubMenu';
import NavBar from '@/components/nav';

function MenuItem({ item }) {
    const [showmenu, setShowmenu] = useState(false);

    function handleDropdownMenu() {
        setShowmenu((prev) => !prev);
    }
  return item.submenu && item.submenu.length > 0 ? (
    <li className="relative" key={item.id}>
        <button className="flex items-center" onClick={handleDropdownMenu}>
            {item.title}
            <Image src="/images/black_arrow.png" width={18} height={10} alt=""  className="ml-1"/>
        </button>
        <SubMenu submenu={item.submenu} showmenu={showmenu} />
    </li>
    ) : (
        <li className="pr-11" key={item.id}>{item.title}</li>
    );
  
}

export default MenuItem;
