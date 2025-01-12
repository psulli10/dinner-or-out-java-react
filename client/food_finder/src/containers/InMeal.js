import Header from "../components/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../components/Button";

const InMeal = () => {

    const {meal} = useParams()
    const text = `Mmmm ${meal} looks lovely!`

    return (
        <>
        <h1>InMeal</h1>
        <Header text={text}/>
        <Button link='/in' action='Back'/>
        <Button link='/' action='Add to favourites'/>
    </>
    )
}

export default InMeal;