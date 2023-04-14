import {
    LandigFooterWraperStyled,
    LandigFooterBoxStyled,
    LandigFooterBtnStyled,
} from "./LandigFooterStyled";

const LandigFooter = () => {
    return (
        <LandigFooterWraperStyled>
            <LandigFooterBoxStyled>
                <LandigFooterBtnStyled type="button" value="about us">
                    about us
                </LandigFooterBtnStyled>
                <LandigFooterBtnStyled type="button" value="contact">
                    contact
                </LandigFooterBtnStyled>
            </LandigFooterBoxStyled>
        </LandigFooterWraperStyled>
    );
};
export default LandigFooter;
