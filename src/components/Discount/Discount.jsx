import _ from "./discount.module.scss";

import Nootris from "../../assets/images/nootris.png";
import Ginger from "../../assets/images/ginger.png";
import Virus from "../../assets/images/virus.png";

export function Discount() {
  return (
    <div className={_._}>
      <div className={`${_.__content} container`}>
        <h2 className={_.__head}>
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
          <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
        </h2>
        <div className={_.__price}>
          <span className={_.__price_before}>750₽</span>
          <span className={_.__price_after}>690₽</span>
        </div>
        <div className={_.__cards}>
          <div className={_.__cards_card}>
            <img className={_.__cards_img} src={Ginger} alt="Ginger" />
          </div>
          <div className={_.__cards_card}>
            <div className={_.__cards_product}>
              <img
                className={_.__cards_product_rotate}
                src={Nootris}
                alt="Nootris"
              />
            </div>
          </div>
          <div className={_.__cards_card}>
            <img className={_.__cards_card_img} src={Virus} alt="Virus" />
          </div>
          <div className={_.__cards_card}>
            <h4>
              Содержит <span>имбирь</span>
            </h4>
          </div>
          <div className={_.__cards_card}>
            <h4 className={_.__cards_descriptions}>
              + Бесплатная доставка <span>Специальная цена</span>
            </h4>
          </div>
          <div className={_.__cards_card}>
            <h4>
              Нейтрализует <span>вирусы</span>
            </h4>
          </div>
        </div>
        <button className="main_button">Оформить заказ!</button>
      </div>
    </div>
  );
}
