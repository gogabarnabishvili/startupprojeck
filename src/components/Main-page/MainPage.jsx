import { Link } from "react-router-dom";
import LabelInput from "../Label-Input/LabelInput";
import { MainPageWraperStyled } from "./MainPageStyled";
const MainPage = () => {
    return (
        <MainPageWraperStyled>
            <Link to={"/profileFeed"}>
                <LabelInput value="sigin up" name="siginUP" type="button" />
            </Link>
        </MainPageWraperStyled>
    );
};
export default MainPage;
