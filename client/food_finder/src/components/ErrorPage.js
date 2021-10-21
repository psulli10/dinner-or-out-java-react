import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const ErrorPage = () => {

    const history = useHistory();

    return (
        <>
            <h1>404 - PAGE NOT FOUND</h1>
            <button onClick={history.goBack}>Back</button>
        </>


    )

}
  
  export default ErrorPage