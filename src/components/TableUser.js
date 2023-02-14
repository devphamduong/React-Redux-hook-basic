import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchAllUsers } from '../redux/action/userActions';

function TableUser(props) {
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.user.listUsers);
    const isLoading = useSelector(state => state.user.isLoading);
    const isError = useSelector(state => state.user.isError);
    // const [listUsers, setListUsers] = useState([]);

    // const fetchAllUsers = async () => {
    //     let res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data);
    // };

    useEffect(() => {
        // fetchAllUsers();
        dispatch(fetchAllUsers());
    }, []);

    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user.id));
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
                    {isError
                        ? <tr><td>Something wrong! Please try again...</td></tr>
                        : <>
                            {isLoading
                                ? <tr><td>Loading data...</td></tr>
                                : <>
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
                                </>
                            }
                        </>
                    }
                </tbody>
            </Table>
        </>
    );
}

export default TableUser;