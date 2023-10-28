import DropdownSelect from '../component/dropdown-select/dropdown.select';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function SummaryView() {

    return (
        <Card>
            <Card.Header>Resumen de gastos e ingresos</Card.Header>
            <Card.Body className='text-center'>
                <DropdownSelect />
                <Button  className='m-6' variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
} 