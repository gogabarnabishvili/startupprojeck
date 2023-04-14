import {
    LendigPageStyled,
    LendigBoxStyled,
    LendigHeaderStyled,
} from "./LendingPageStyled";
import { Link } from "react-router-dom";
import LandingNav from "../Landig-Page-navigeit/LandigNav";

const LandingPage = () => {
    return (
        <LendigPageStyled>
            <LandingNav />
        </LendigPageStyled>
    );
};
export default LandingPage;
