import { Logo } from "../../elements/Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import BasketSvg from "../../assets/images/basket.svg";

import _ from './header.module.scss';

export function Header() {
    return (
        <header className={ _._ }>
            <div className={`${ _.__content } container`}>
                <Logo />
                <Navbar />
                <div className={ _.__content_icons }>
                    <div className={ _.__content_menuIcon } onClick={() => setOpen(!isOpen)}>
                        <div className={ _.__content_menuIcon_trans }></div>
                    </div>
                    <div className={ _.__basket }>
                        <a className={ _.__basket_link } href="#">
                            <img className={ _.__basket_img } src={BasketSvg} alt='basket' />
                        </a>
                        <span className={ _.__basket_notification }>1</span>
                    </div>
                </div>
            </div>
        </header>
    )
}