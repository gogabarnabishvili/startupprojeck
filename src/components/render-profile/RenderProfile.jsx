import {
    ProfileWraperStyled,
    ProfileBoxStyled,
    ProfileH2Styled,
    ProfileImgStyled,
    ProfilePStyled,
    ProfileSpanStyled,
} from "./RenderProfileStyled";
const srcAvatar =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.searchenginejournal.com%2Fbest-image-search-engines%2F299963%2F&psig=AOvVaw1MhsyKGhtomjXvKd_9NmOx&ust=1681517427380000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICTzNiKqP4CFQAAAAAdAAAAABAJ";
const ProfileRender = (props) => {
    return (
        <ProfileWraperStyled>
            <ProfileBoxStyled>
                <ProfileImgStyled
                    src={srcAvatar}
                    width={props.width}
                ></ProfileImgStyled>
                <ProfileBoxStyled>
                    <ProfileH2Styled>{props.fullName}</ProfileH2Styled>
                    <ProfilePStyled>{props.country}</ProfilePStyled>
                    <ProfilePStyled>{props.amount}</ProfilePStyled>
                </ProfileBoxStyled>
            </ProfileBoxStyled>
        </ProfileWraperStyled>
    );
};

export default ProfileRender;
