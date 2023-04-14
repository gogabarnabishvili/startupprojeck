import { SelectStyled, OptionStyled } from "./SelectOptionStyled";

const SelectOption = (props) => {
    return (
        <>
            <SelectStyled>
                {props.option.map((e, index) => (
                    <OptionStyled key={index} value={e.value}>
                        {e}
                    </OptionStyled>
                ))}
            </SelectStyled>
        </>
    );
};
export default SelectOption;
