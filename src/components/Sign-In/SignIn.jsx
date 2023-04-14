import LabelInput from "../Label-Input/LabelInput";
import { SiginFormStyled } from "./SignInStyled";
import { Link, useNavigate, useParams } from "react-router-dom";
import useState from "react-hook-use-state";
import BackExpenses from "../../function/local-back/LocalInfoBack";
import saveExpenses from "../../function/local-store/LocalStore";

// import BaseRecall from "../../function/base-user/BazeUser";
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const SignInValid = () => {
        BackExpenses("users").map((e) => {
            if (e.email === email && e.password === password) {
                const token = {
                    token: e.id,
                };
                saveExpenses(token, "token");
                navigate("/");
            }
        });
    };

    if (BackExpenses("users")) {
    }
    return (
        <SiginFormStyled>
            <LabelInput
                text="email"
                name="email"
                type="email"
                onChange={onEmailChange}
            />

            <LabelInput
                text="password"
                name="password"
                type="password"
                onChange={onPasswordChange}
            />

            <LabelInput
                value="sigin in"
                name="siginIn"
                type="button"
                onClick={(e) => SignInValid()}
            />
            <Link to={"/signup"}>
                <LabelInput value="sigin up" name="siginUP" type="button" />
            </Link>
        </SiginFormStyled>
    );
};

export default SignIn;
