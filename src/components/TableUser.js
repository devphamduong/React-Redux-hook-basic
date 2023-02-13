import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TableUser(props) {
    const [listUsers, setListUsers] = useState([]);

    const fetchAllUsers = async () => {
        let res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : [];
        setListUsers(data);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const handleDeleteUser = (user) => {

    };

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
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <button className='btn btn-warning'>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteUser(item)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default TableUser;