import LabelInput from "../Label-Input/LabelInput";
import { useNavigate } from "react-router-dom";
import { SiginFormStyled } from "../Sign-In/SignInStyled";
import useState from "react-hook-use-state";
import saveExpenses from "../../function/local-store/LocalStore";
import BackExpenses from "../../function/local-back/LocalInfoBack";
import LendigHeader from "../Landig-Page-navigeit/LandigNav";
import LandigFooter from "../landig-footer/LandigFooter";

const SiginUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [email, setEmail] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onRePasswordChange = (e) => setRePassword(e.target.value);

    const clearValue = () => {
        setName(``);
        setPassword(``);
        setRePassword(``);
        setEmail(``);
    };
    const UsersSave = () => {
        if (
            name !== "" &&
            password !== "" &&
            rePassword === password &&
            email !== "" &&
            name.length >= 4 &&
            password.length >= 8
        ) {
            const users = {
                name: name,
                password: password,
                email: email,
                id: BackExpenses("users")
                    ? BackExpenses("users").length + 1
                    : 1,
            };

            saveExpenses(users, "users");
            clearValue();
            navigate("/");
        } else {
            clearValue();
            console.log("ver gaira");
        }
    };

    return (
        <SiginFormStyled>
            <LendigHeader />
            <LabelInput
                text="name"
                name="name"
                type="text"
                placeholder="min charachter 4"
                onChange={onNameChange}
            />

            <LabelInput
                text="password"
                name="password"
                type="password"
                placeholder="min character 8"
                onChange={onPasswordChange}
            />
            <LabelInput
                text="re password"
                name="repassword"
                type="password"
                onChange={onRePasswordChange}
            />
            <LabelInput
                text="email"
                name="email"
                type="email"
                onChange={onEmailChange}
            />
            <LabelInput
                value="join"
                name="siginIn"
                type="button"
                onClick={UsersSave}
            />
            <LabelInput
                value="sigin in"
                name="siginIn"
                type="button"
                onClick={() => navigate("/sigIn")}
            />
            <LandigFooter />
        </SiginFormStyled>
    );
};
export default SiginUp;
