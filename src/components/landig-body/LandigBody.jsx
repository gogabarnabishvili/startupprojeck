import {
    LandigBodyBoxStyled,
    LandigBodyImgStyled,
    LandigBodyPStyled,
    LandigBodyTitleStyled,
    LandigBodyWraperStyled,
    LandigBodyTitleBoxStyled,
    LandigBodyStyled,
} from "./LandigBodyStyle";
const landig = require("../../img-icons/LandigPage.jpg");
const LandigBody = () => {
    return (
        <LandigBodyWraperStyled>
            <LandigBodyStyled>
                <LandigBodyTitleBoxStyled>
                    <LandigBodyTitleStyled>
                        ყველაზე ცუდი დროა დეპრესია ცხოვრებაში
                    </LandigBodyTitleStyled>
                </LandigBodyTitleBoxStyled>
                <LandigBodyBoxStyled>
                    <LandigBodyPStyled>serch jobs</LandigBodyPStyled>
                    <LandigBodyPStyled>serch startap</LandigBodyPStyled>
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
