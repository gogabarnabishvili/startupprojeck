import { Link } from "react-router-dom";
import LabelInput from "../Label-Input/LabelInput";
import { MainPageWraperStyled } from "./MainPageStyled";
import MainPageNavigeit from "../main-page-navigeit/MainNavigeit";
import MainPostsRender from "../main-posts-render/MainPostsRender";
import NewPostsAdd from "../new-posts/NewPosts";
import BackExpenses from "../../function/local-back/LocalInfoBack";

const posts = BackExpenses("posts");
const MainPage = () => {
    return (
        <MainPageWraperStyled>
            <MainPageNavigeit />
            {/* <NewPostsAdd /> */}
            <MainPostsRender posts={posts} />
            <Link to={"/"}>
                <LabelInput value="sigin up" name="siginUP" type="button" />
            </Link>
        </MainPageWraperStyled>
    );
};
export default MainPage;
