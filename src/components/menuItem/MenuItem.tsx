import { Link } from 'react-router-dom';

interface MenuItemProps {
    children: React.ReactNode;
    to: string;
}

export default function MenuItem({ children, to}: MenuItemProps) {
    return(
        <>
       <Link to={to}>{ children }</Link>
        </>
    )
}