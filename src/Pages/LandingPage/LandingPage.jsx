
import { Col, Container, Row } from "react-bootstrap"
import { CardItem } from "../../Components/CardItem/CardItem"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { useGetData } from "../../Hooks/GetData"

export const LandingPages = () => {
    const GifData = useGetData("trending")

    return (
        <>
            <NavbarComponent />
            <Container>
                <div className="my-5 text-center">
                    <h1>HELLO WELCOME BACK!!</h1>
                    <p>Enjoy your giphy!!</p>
                </div>
                <div className="my-5">
                    <h1>Trending</h1>
                    <Row className="my-3 g-3">
                        {GifData.isLoading === true ? (
                            <div className="text-center">
                                <h1>Loading </h1>
                                <div className="spinner-grow text-dark me-2" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark me-2" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : GifData.data.data.map((item) => {
                            return (
                                <Col lg={3} key={item.id}>
                                    <CardItem data={item} size="small"></CardItem>
                                </Col>
                            )
                        })
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}