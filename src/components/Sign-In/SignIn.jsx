import LabelInput from "../Label-Input/LabelInput";
import { SiginFormStyled } from "./SignInStyled";
import { Link, useNavigate, useParams } from "react-router-dom";
import useState from "react-hook-use-state";
import BackExpenses from "../../function/local-back/LocalInfoBack";

// import BaseRecall from "../../function/base-user/BazeUser";
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    console.log(BackExpenses("users"));
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

            <LabelInput value="sigin in" name="siginIn" type="button" />
            <Link to={"/signup"}>
                <LabelInput value="sigin up" name="siginUP" type="button" />
            </Link>
        </SiginFormStyled>
    );
};

export default SignIn;
