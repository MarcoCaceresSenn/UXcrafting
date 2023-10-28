import DropdownSelect from '../component/dropdown-select/dropdown.select';
import Card from 'react-bootstrap/Card';
import './summary.view.css'
export default function SummaryView() {

    return (
        <div className='mt-5'>
            <Card className='w-75 mx-auto'>
                <div className='w-50'>
                    <h1 className='title-ubication' >Tarjeta de dédito</h1>
                    <div>
                        <h2  className='card-ubication'>**** 1478</h2>
                    </div>
                </div>
                <Card.Body className='text-center'>
                    <DropdownSelect />
                </Card.Body>
                <div>
                </div>
            </Card>
        </div>

    );
} 