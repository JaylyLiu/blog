import React from 'react';

import './TransactionDetail.css';
class TransactionDetail extends React.Component{
  state={}
  render() {
    return (
      <div className="transactiondetail">
          <div className="transactiondetail-div">
            Transaction detail
          </div>
        <table className="transactiondetail-table">
          <thead>
            <tr>
              <th>
                Time
              </th>
              <th>
                Description
              </th>
              <th>
                Amount(USD)
              </th>
              <th>
                Status
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                April 04, 2017
              </td>           
              <td>
                Paid for lesson
              </td>
              <td>
                -16.00
              </td>
              <td>
                Completed
              </td>
              <td>
                View Details
              </td>
            </tr>
            <tr>
              <td>
                April 04, 2017
              </td>           
              <td>
                Paid for lesson
              </td>
              <td>
                -16.00
              </td>
              <td>
                Completed
              </td>
              <td>
                View Details
              </td>
            </tr>
            <tr>
              <td>
                April 04, 2017
              </td>           
              <td>
                Paid for lesson
              </td>
              <td>
                -16.00
              </td>
              <td>
                Completed
              </td>
              <td>
                View Details
              </td>
            </tr>
            <tr>
              <td>
                April 04, 2017
              </td>           
              <td>
                Paid for lesson
              </td>
              <td>
                -16.00
              </td>
              <td>
                Completed
              </td>
              <td>
                View Details
              </td>
            </tr>
            <tr>
              <td>
                April 04, 2017
              </td>           
              <td>
                Paid for lesson
              </td>
              <td>
                -16.00
              </td>
              <td>
                Completed
              </td>
              <td>
                View Details
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default TransactionDetail;