import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/action/userActions';

function FormAddNew(props) {
    const dispatch = useDispatch();
    const isCreating = useSelector(state => state.user.isCreating);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateUser = () => {
        dispatch(createUser(email, password, username));
        setEmail('');
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <h3 className='mt-4'>Create a new user:</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => handleCreateUser()} disabled={isCreating}>
                    Create
                </Button>
            </Form>
        </>
    );
}

export default FormAddNew;