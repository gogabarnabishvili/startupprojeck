import {
    LendigPageStyled,
    LendigBoxStyled,
    LendigHeaderStyled,
} from "./LendingPageStyled";
import { Link } from "react-router-dom";
import LandingNav from "../Landig-Page-navigeit/LandigNav";
import LandigBody from "../landig-body/LandigBody";
import LandigFooter from "../landig-footer/LandigFooter";

const LandingPage = () => {
    return (
        <LendigPageStyled>
            <LandingNav />
            <LandigBody />
            <LandigFooter />
        </LendigPageStyled>
    );
};
export default LandingPage;
