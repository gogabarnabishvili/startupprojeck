import LabelInput from "../Label-Input/LabelInput";
import {
    LendigHeaderStyled,
    LendigLogoStyled,
    LendigNavStyled,
    LendigDivtyled,
} from "./LandigNavStyled";
import SelectOption from "../lenguage-select/SelectOption";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import TEXTS from "../text/Text";
import { LanguageContext } from "../lenguage-change/LenguageChange";

const logo = require("../../img-icons/logo.webp");

const LendigHeader = () => {
    const [lenguage1, setLenguage] = useState("geo");
    const { language, updateLang } = useContext(LanguageContext);
    updateLang(lenguage1);

    const navigate = useNavigate();
    return (
        <LendigHeaderStyled>
            <LendigLogoStyled src={logo} alt="it logo"></LendigLogoStyled>
            <LendigNavStyled>
                <LendigDivtyled>
                    <LabelInput
                        name="btnJoin"
                        type="button"
                        value={TEXTS[language].signin}
                        onClick={() => navigate("/sigIn")}
                    ></LabelInput>
                    <LabelInput
                        name="btnReg"
                        type="button"
                        value={TEXTS[language].signup}
                        onClick={() => navigate("/signup")}
                    ></LabelInput>
                </LendigDivtyled>

                <SelectOption onChange={(e) => setLenguage(e.target.value)} />
            </LendigNavStyled>
        </LendigHeaderStyled>
    );
};
export default LendigHeader;
