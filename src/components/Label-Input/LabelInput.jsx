import { LabelStyled, InputStyled, LabelInputBox } from "./LabelInputStyled";

const LabelInput = (props) => {
    return (
        <LabelInputBox>
            <LabelStyled id={props.id} name={props.name}>
                {props.text}
                <InputStyled
                    type={props.type}
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onClick={props.onClick}
                ></InputStyled>
            </LabelStyled>
        </LabelInputBox>
    );
};
export default LabelInput;
