import {
    LandigFooterWraperStyled,
    LandigFooterBoxStyled,
    LandigFooterBtnStyled,
} from "./LandigFooterStyled";
import TEXTS from "../text/Text";
import { useContext } from "react";
import { LanguageContext } from "../lenguage-change/LenguageChange";

const LandigFooter = () => {
    const { language } = useContext(LanguageContext);
    return (
        <LandigFooterWraperStyled>
            <LandigFooterBoxStyled>
                <LandigFooterBtnStyled type="button">
                    {TEXTS[language].aboutus}
                </LandigFooterBtnStyled>
                <LandigFooterBtnStyled type="button">
                    {TEXTS[language].contact}
                </LandigFooterBtnStyled>
            </LandigFooterBoxStyled>
        </LandigFooterWraperStyled>
    );
};
export default LandigFooter;
