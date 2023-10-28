import "bootstrap/dist/css/bootstrap.min.css";
import "./button.component.css";
import Button from "react-bootstrap/Button";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ButtonComponent() {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate("/questionary");
    };
  return (
    <div>
      <Button className="custom" onClick={handleClick}>
        ¿Te gustaría mejorar tu experiencia? <BsFillEmojiWinkFill />
      </Button>
    </div>
  );
}
