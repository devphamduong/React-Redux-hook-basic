import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableUser from "./TableUser";
import Container from 'react-bootstrap/Container';

function Home(props) {
    return (
        <>
            <Header />
            <Container>
                <FormAddNew />
                <TableUser />
            </Container>
        </>
    );
}

export default Home;