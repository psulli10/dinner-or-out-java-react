import Button from "../components/Button";
import Header from "../components/Header";

const SignUp = () => {
    return (
        <>
        <h1>SignIn</h1>
        <Header text='Sign in please...'/>
        <Button link='/' action='Cancel'/>
        <Button link='/in-out' action='Sign In (form input required)'/>
    </>
    )
}

export default SignUp;