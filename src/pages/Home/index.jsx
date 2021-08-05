import React from 'react'
import { Table } from 'reactstrap';
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";
// import {MdSettingsBackupRestore} from "@react-icons/all-files/"
import './Home.css'
function Home() {
  return (
    <div className="home">
      <h5>My Assignment</h5>
      <Table>
        <thead>
          <tr>
            <th>Asset Code</th>
            <th>Asset Name</th>
            <th>Category</th>
            <th>Assigned Date</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <a className='icon-nash'>

                <IoCloseSharp />
              </a>
              <a className='icon-nash'>

                <FaCheck />
              </a>
              {/* <a>

                <MdSettingsBackupRestore />
              </a> */}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Home
