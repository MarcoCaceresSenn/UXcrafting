import "bootstrap/dist/css/bootstrap.min.css";
import "./button.component.css";
import Button from "react-bootstrap/Button";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ButtonComponent({ porcentaje }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (porcentaje < 50) {
      setTexto("¿Que hubiera pasado si hubieras ahorrado?");
    } else if (porcentaje >= 50) {
      setTexto("¿Que hubiera pasado si hubieras invertido? ");
    }
  }, [porcentaje]);

  return (
    <div>
      <Button href="/expense-analyzer" className="custom">
        {texto}  <BsFillPiggyBankFill/>
      </Button>
    </div>
  );
}
