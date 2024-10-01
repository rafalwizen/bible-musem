import { useEffect, useRef } from 'react';
import './MainSection.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import { Button } from "./Button.jsx";

export const MainSection = ({ scrollToCards }) => {
    const { t } = useTranslation();
    const mainSectionRef = useRef(null);

    useEffect(() => {
        const navbarHeight = 80;
        if (mainSectionRef.current) {
            mainSectionRef.current.style.height = `calc(100vh - ${navbarHeight}px)`;
        }
    }, []);

    return (
        <div className={"main-container"} ref={mainSectionRef}>
            <div className={"text-content"}>
                <h1>SUPER WYSTAWA</h1>
                <p>WYSTAWA KTÓRA MOŻE PRZYJECHAĆ DO CIEBIE</p>
            </div>
            <div className={"main-btns"}>
                <Button
                    className={'btns'}
                    buttonStyle={'btn--primary'}
                    buttonSize={'btn--large'}
                    onClick={scrollToCards}
                >
                    {t('main.see_more')}
                </Button>
            </div>
        </div>
    );
};

export default MainSection;
