import LabelInput from "../Label-Input/LabelInput";
import { SiginFormStyled } from "./SignInStyled";
import { Link, useNavigate, useParams } from "react-router-dom";
import useState from "react-hook-use-state";
import BackExpenses from "../../function/local-back/LocalInfoBack";
import saveExpenses from "../../function/local-store/LocalStore";
import LendigHeader from "../Landig-Page-navigeit/LandigNav";
import LandigFooter from "../landig-footer/LandigFooter";

// import BaseRecall from "../../function/base-user/BazeUser";
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const SignInValid = () => {
        if (BackExpenses("users")) {
            BackExpenses("users").map((e) => {
                if (e.email === email && e.password === password) {
                    const token = {
                        token: e.id,
                    };
                    saveExpenses(token, "token");
                    if (BackExpenses("token")) {
                        navigate("/signup");
                    } else {
                        navigate("/");
                    }
                }
            });
        } else {
        }
    };
    if (BackExpenses("token")) {
        navigate("/mainPage");
    }
    if (BackExpenses("users")) {
    }
    return (
        <SiginFormStyled>
            <LendigHeader />
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
                onClick={() => SignInValid()}
            />
            <Link to={"/signup"}>
                <LabelInput value="sigin up" name="siginUP" type="button" />
            </Link>
            <LandigFooter />
        </SiginFormStyled>
    );
};

export default SignIn;
