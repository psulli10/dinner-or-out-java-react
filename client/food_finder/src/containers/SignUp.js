import Button from "../components/Button";
import Header from "../components/Header";

const SignUp = () => {
    return (
        <>
        <h1>SignUp</h1>
        <Header text='Please fill out your information'/>
        <Button link='/' action='Cancel'/>
        <Button link='/' action='Sign Up (form input required)'/>
    </>
    )
}

export default SignUp;