import _ from './menuItem.module.scss';

export function MenuItem({ menu }) {
  return (
    <li className={ _._ }>
        <a className={ _.__link } href={menu.path}>{menu.name}</a>
    </li>
  )
}
