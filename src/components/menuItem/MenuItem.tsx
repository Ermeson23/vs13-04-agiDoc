import { Link } from 'react-router-dom';

import './menuitem.css';

interface MenuItemProps {
    children: React.ReactNode;
    to: string;
}

export default function MenuItem({ children, to}: MenuItemProps) {
    return(
        <>
       <Link className='link-menu' to={to}>{ children }</Link>
        </>
    )
}