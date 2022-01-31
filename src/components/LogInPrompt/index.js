import LoginButton from "../LoginButton";
import css from "../../styles/loginPrompt.module.css";

export default function LoginPrompt(){

    return(
        <div className={css.fullScreen}>
            <h1>Please Log in to read some 🕊️ cool stuff!</h1>
            <LoginButton/>
        </div>
    )
}