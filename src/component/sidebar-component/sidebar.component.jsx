import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.component.css';

export default function SideBarComponent() {
  return (
    <div>
      <ul className="sidebar list-group col-md-2 mt-5 list-group-flush">
        <li className="list-group-item">
          <a href="/seguimiento-de-gastos">Seguimiento de gastos</a>
        </li>
        <li className="list-group-item">
          <a href="/logra-tus-objetivos">Logra tus objetivos</a>
        </li>
        <li className="list-group-item">
          <a href="/mis-presupuestos">Mis presupuestos</a>
        </li>
        <li className="list-group-item">
          <a href="/bienestar-financiero">Bienestar financiero</a>
        </li>
      </ul>
    </div>
  );
}
