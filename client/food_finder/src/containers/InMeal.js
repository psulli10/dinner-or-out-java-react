import Header from "../components/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const InMeal = () => {

    const {meal} = useParams()
    const text = `Mmmm ${meal} looks lovely!`

    return (
        <>
        <h1>InMeal</h1>
        <Header text={text}/>
        
    </>
    )
}

export default InMeal;