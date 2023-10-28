import "bootstrap/dist/css/bootstrap.min.css";
import "./button.siganl.component.css";
import Button from "react-bootstrap/Button";

export default function ButtonComponent() {
  
  return (
    <div className="mb-5">
      <Button href="https://www.warda.com.pe/" className="custom rounded-pill p-3">
        ¡Empezar a Ahorrar!      </Button>
    </div>
  );
}
