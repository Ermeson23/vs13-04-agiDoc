import React from 'react';

interface MenuItemProps {
    href: string;
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text }) => {
    return (
        <a href={href}>{ text }</a>
    );
};

export default MenuItem;