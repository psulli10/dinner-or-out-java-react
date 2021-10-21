import Button from "../components/Button";
import Header from "../components/Header";

const Splash = () => {
    return (
        <>
            <h1>Splash</h1>
            <Header text='D-In or Out?'/>
            <Button link='sign-up' action='Sign Up!'/>
            <Button link='sign-in' action='Sign In!'/>
        </>
    )
}

export default Splash;