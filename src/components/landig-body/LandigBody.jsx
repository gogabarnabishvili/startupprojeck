import {
    LandigBodyBoxStyled,
    LandigBodyImgStyled,
    LandigBodyPStyled,
    LandigBodyTitleStyled,
    LandigBodyWraperStyled,
    LandigBodyTitleBoxStyled,
    LandigBodyStyled,
    LandigBodySpanStyled,
} from "./LandigBodyStyle";
import { useContext } from "react";
import { LanguageContext } from "../lenguage-change/LenguageChange";
import TEXTS from "../text/Text";
const landig = require("../../img-icons/LandigPage.jpg");
const LandigBody = () => {
    const { language } = useContext(LanguageContext);
    return (
        <LandigBodyWraperStyled>
            <LandigBodyStyled>
                <LandigBodyTitleBoxStyled>
                    <LandigBodyTitleStyled>
                        {TEXTS[language].landigTitle}
                    </LandigBodyTitleStyled>
                </LandigBodyTitleBoxStyled>
                <LandigBodyBoxStyled>
                    <LandigBodyPStyled>
                        {TEXTS[language].landigSerchTalant}
                        <LandigBodySpanStyled>
                            {TEXTS[language].open}
                        </LandigBodySpanStyled>
                    </LandigBodyPStyled>

                    <LandigBodyPStyled>
                        {TEXTS[language].landigSerchJob}
                        <LandigBodySpanStyled>
                            {TEXTS[language].open}
                        </LandigBodySpanStyled>
                    </LandigBodyPStyled>
                </LandigBodyBoxStyled>
            </LandigBodyStyled>
            <LandigBodyImgStyled
                src={landig}
                alt="it logo"
            ></LandigBodyImgStyled>
        </LandigBodyWraperStyled>
    );
};
export default LandigBody;
