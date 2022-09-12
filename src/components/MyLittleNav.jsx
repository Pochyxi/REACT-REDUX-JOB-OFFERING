import { Navbar, Container, Badge } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const MyLittleNav = () => {
    const favourites = useSelector((state) => state.jobs.content)

    return (
        <Navbar className="b-nav" bg="light">
            <Container>
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites{
                    favourites.length > 0 && (
                        <Badge className="b-fbadge" pill bg="danger">
                            {favourites.length}
                        </Badge>
                    )
                }</Link>
            </Container>
        </Navbar>
    )
}

export default MyLittleNav;