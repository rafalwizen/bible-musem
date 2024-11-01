import CardItem from "./CardItem.jsx";
import './Cards.css';
import img1 from '../../public/images/main_photo.jpg';
import img2 from '../../public/images/main_photo.jpg';
import img3 from '../../public/images/main_photo.jpg';
import img4 from '../../public/images/main_photo.jpg';
import img5 from '../../public/images/main_photo.jpg';
import { useTranslation } from 'react-i18next';

const Cards = () => {
    const { t } = useTranslation();

    return (
        <div className={'cards'}>
            <h1>{t('cards.heading')}</h1>
            <div className={'cards__container'}>
                <div className={'cards__wrapper'}>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={img1}
                            text={t('cards.card1_text')}
                            label={t('cards.card1_label')}
                            path={'/gallery'}
                        />
                        <CardItem
                            src={img2}
                            text={t('cards.card2_text')}
                            label={t('cards.card2_label')}
                            path={'/opinions'}
                        />
                    </ul>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={img3}
                            text={t('cards.card3_text')}
                            label={t('cards.card3_label')}
                            path={'/about-me'}
                        />
                        <CardItem
                            src={img4}
                            text={t('cards.card4_text')}
                            label={t('cards.card4_label')}
                            path={'/offer'}
                        />
                        <CardItem
                            src={img5}
                            text={t('cards.card5_text')}
                            label={t('cards.card5_label')}
                            path={'/contact'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
