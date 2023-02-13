import Table from 'react-bootstrap/Table';

function TableUser(props) {
    return (
        <>
            <h3 className='mt-4'>Table Users</h3>
            <Table striped bordered hover className='mt-2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default TableUser;