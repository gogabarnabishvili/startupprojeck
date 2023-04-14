import LabelInput from "../Label-Input/LabelInput";
import {
    LendigHeaderStyled,
    LendigLogoStyled,
    LendigNavStyled,
    LendigDivtyled,
} from "./LandigNavStyled";
import SelectOption from "../lenguage-select/SelectOption";
import { Link, useNavigate } from "react-router-dom";
const logo = require("../../img-icons/logo.webp");

const lenguage = ["geo", "en", "rus"];
const LendigHeader = () => {
    const navigate = useNavigate();
    return (
        <LendigHeaderStyled>
            <LendigLogoStyled src={logo} alt="it logo"></LendigLogoStyled>
            <LendigNavStyled>
                <LendigDivtyled>
                    <LabelInput
                        type="button"
                        value="შესვლა"
                        onClick={() => navigate("/sigIn")}
                    ></LabelInput>
                    <LabelInput type="button" value="რეგისტრაცია"></LabelInput>
                </LendigDivtyled>
                <SelectOption option={lenguage} name="lenguage" />
            </LendigNavStyled>
        </LendigHeaderStyled>
    );
};
export default LendigHeader;
