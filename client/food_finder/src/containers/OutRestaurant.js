import Header from "../components/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../components/Button";

const OutRestaurant = () => {

    const {restaurant} = useParams()
    const text = `Mmmm ${restaurant} looks great!`

    return (
        <>
        <h1>OutRestaurant</h1>
        <Header text={text}/>
        <Button link='/out' action='Back'/>
        <Button link='/' action='Add to favourites'/>
    </>
    )
}

export default OutRestaurant;