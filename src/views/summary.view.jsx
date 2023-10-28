import DropdownSelect from '../component/dropdown-select/dropdown.select';
import Card from 'react-bootstrap/Card';
import Button from '../component/button-component/button.component.jsx'
export default function SummaryView() {

    return (
        <Card>
            <Card.Header>Resumen de gastos e ingresos</Card.Header>
            <Card.Body className='text-center'>
                <DropdownSelect />
                <Button/>
            </Card.Body>
        </Card>
    );
} 