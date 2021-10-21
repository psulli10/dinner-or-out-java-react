import Button from "../components/Button";
import Header from "../components/Header";

const InOut = () => {
    return (
        <>
        <h1>InOut</h1>
        <Header text='So... what will it be?'/>
        <Button link='/in' action='In'/>
        <Button link='/out' action='Out'/>
    </>
    )
}

export default InOut;