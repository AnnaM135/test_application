import { menuData } from '../../data/menu';
import { MenuItem } from '../../elements/MenuItem/MenuItem';
import _ from './navbar.module.scss';

export function Navbar() {
    return (
        <nav className={ _._ }>
            <ul className={ _.__list }>
                {menuData.map((menu) => (
                    <MenuItem key={menu.id} menu={menu} />
                ))}
            </ul>
        </nav>
    )
}