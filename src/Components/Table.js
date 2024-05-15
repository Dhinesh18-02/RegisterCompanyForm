import {Table} from 'antd'

const Table = ({ data }) => {
    
    return (
        <table>
            <thead>
                 <th>Company Name</th>
                 <th>Address</th>
                 <th>Country</th>
                 <th>Url</th>
            </thead>
            <tbody>
                <tr>{(data || []).map((items, index) => {
                    return( <td>{items.companyName}</td>)
                })}
                </tr>
            </tbody>
        </table>
    )
}

export default Table;