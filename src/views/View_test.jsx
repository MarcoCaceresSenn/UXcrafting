//import Sidebar from '../component/sidebar-component/sidebar.component'
//import Progressbar from '../component/progressbar-component/progressbar.component.jsx'
//import BarGraph from '../component/graph-component/BarChart.jsx'
//import LineGraph from '../component/graph-component/linechart.jsx'
//import PieGraph from '../component/graph-component/piechart.jsx'
import Button from '../component/button-component/button.component.jsx'
import SelectMonths from '../component/dropdown-select/dropdown.select.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
export default function View_test() {
    return (
        <div className='text-center' >
          <SelectMonths/>
          <Button/>
        </div>
    )
}
