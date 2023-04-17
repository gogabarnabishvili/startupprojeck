import {
    PostsRemderWraperStyled,
    PostsRemderBoxStyled,
    TitleRemderH2Styled,
    NameRemderH3Styled,
    DateRemderPStyled,
    InfoRemderInfoStyled,
    DeleteRemderPostStyled,
    FavoritDeleteBoxStyled,
    FavoritPostsStyled,
} from "./MainPostsRenderStyled";
const heart = require("../../img-icons/Heart_corazón.svg.png");
const MainPostsRender = (props) => {
    return (
        <PostsRemderWraperStyled>
            {props.posts.map((e, index) => (
                <PostsRemderBoxStyled key={index} id={e.id}>
                    <DateRemderPStyled>{e.date}</DateRemderPStyled>
                    <TitleRemderH2Styled>{e.title}</TitleRemderH2Styled>
                    <NameRemderH3Styled>{e.name}</NameRemderH3Styled>
                    <InfoRemderInfoStyled>{e.description}</InfoRemderInfoStyled>
                    <FavoritDeleteBoxStyled>
                        <FavoritPostsStyled src={heart}></FavoritPostsStyled>
                        <DeleteRemderPostStyled>x</DeleteRemderPostStyled>
                    </FavoritDeleteBoxStyled>
                </PostsRemderBoxStyled>
            ))}
        </PostsRemderWraperStyled>
    );
};
export default MainPostsRender;
