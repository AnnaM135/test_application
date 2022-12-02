import _ from "./aboutProduct.module.scss";

import Nootris from '../../assets/images/nootris.png';
import Ginger from '../../assets/images/ginger.png';
import Lemon from '../../assets/images/Lemon.png';


export function AboutProduct() {
  return (
    <section className={_._}>
      <div className={`${_.__content} container`}>
        <div className={_.__feautures}>
          <div className={_.__feautures_top}>
            <h1 className={_.__feautures_head}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
            <p className={_.__feautures_description}>
              Всего пять секунд в день помогут укрепить иммунитет и повысить
              защитные силы организма
            </p>
          </div>
          <div className={_.__feautures_bottom}>
            <h2 className={_.__feautures_title}>NOOTRIS ПОМОГАЕТ</h2>
            <p className={_.__feautures_quotes}>
              Вашему организму во время пандемии и сезонных простуд
            </p>
          </div>
        </div>
        <div className={_.__compositionImages}>
            <div className={_.__compositionImages_nootris}>
                <img src={Nootris} alt="Nootris"/>
            </div>
            <div className={_.__compositionImages_ginger}>
                <img src={Ginger} alt="Ginger"/>
            </div>
            <div className={_.__compositionImages_lemon}>
                <img src={Lemon} alt="Lemon"/>
            </div>
        </div>
      </div>
    </section>
  );
}
