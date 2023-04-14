import LabelInput from "../Label-Input/LabelInput";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SiginFormStyled } from "../Sign-In/SignInStyled";
import useState from "react-hook-use-state";
import saveExpenses from "../../function/local-store/LocalStore";
import BackExpenses from "../../function/local-back/LocalInfoBack";

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
            email !== ""
        ) {
            const users = {
                name: name,
                password: password,
                email: email,
                id: BackExpenses("users")
                    ? BackExpenses("users").length + 1
                    : 1,
            };
            console.log(users);
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
            <LabelInput
                text="name"
                name="name"
                type="text"
                onChange={onNameChange}
            />

            <LabelInput
                text="password"
                name="password"
                type="password"
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
            {/* <Link to={"/mainpage"}>
                <LabelInput value="main page" name="main" type="button" />
            </Link> */}
        </SiginFormStyled>
    );
};
export default SiginUp;
