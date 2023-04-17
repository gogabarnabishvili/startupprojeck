// import MainPage from "../Main-page/MainPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    MainPageH1Styled,
    MainPageHeaderStyled,
    MainPageLiStyled,
    MainPageNavStyled,
    MainPageUlStyled,
} from "./MainNavigateStyled";
import BackExpenses from "../../function/local-back/LocalInfoBack";
import NewPostsAdd from "../new-posts/NewPosts";
import { NewInfoAddStyled } from "../new-posts/NewPostsStyled";
import styled from "styled-components";
const Backposts = BackExpenses("token");

const MainPageNavigeit = () => {
    const navigate = useNavigate();

    return (
        <MainPageHeaderStyled>
            <MainPageH1Styled>logo</MainPageH1Styled>
            <MainPageNavStyled>
                <MainPageUlStyled>
                    <MainPageLiStyled>new post</MainPageLiStyled>
                    <MainPageLiStyled>more</MainPageLiStyled>
                    <MainPageLiStyled>posts</MainPageLiStyled>
                    <MainPageLiStyled>contact</MainPageLiStyled>
                    <MainPageLiStyled>profile</MainPageLiStyled>
                </MainPageUlStyled>
            </MainPageNavStyled>
        </MainPageHeaderStyled>
    );
};
export default MainPageNavigeit;
