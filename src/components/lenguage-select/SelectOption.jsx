import { SelectStyled, OptionStyled } from "./SelectOptionStyled";

const SelectOption = (props) => {
    return (
        <>
            <SelectStyled onChange={props.onChange}>
                <OptionStyled value="geo">geo</OptionStyled>
                <OptionStyled value="eng">eng</OptionStyled>
            </SelectStyled>
        </>
    );
};
export default SelectOption;
// {props.option.map((e, index) => (
//     <OptionStyled key={index} value={e.value}>
//         {e}
//     </OptionStyled>
// ))}
