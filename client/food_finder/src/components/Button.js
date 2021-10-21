import { Link } from "react-router-dom";

const Button = ({ link, action }) => {
  return (
    <Link to={link}>
      <button>{action}</button>
    </Link>
  );
};

export default Button;
