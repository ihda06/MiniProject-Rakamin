
import { Button, Container } from "react-bootstrap"
import { CardItem } from "../../Components/CardItem/CardItem"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { useGetData } from "../../Hooks/GetData"

export const RandomPage = () => {
    let data = useGetData("random")
    const handleClick=()=>{
        window.location.reload();
    }

    // useEffect(() => {
    //     console.log(data)
    // }, [])

    return (
        <>
            <NavbarComponent />
            <Container>
                <div className="my-5 text-center">
                    <h1>HELLO WELCOME BACK!!</h1>
                    <p>Enjoy your giphy!!</p>
                </div>
                <div className="my-5 text-center">
                    <h1>This is your random gifs</h1>
                    <Button onClick={handleClick}>Random Again</Button>
                    {
                        data.isLoading ? (
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
                        ) : (
                            <div className="d-flex justify-content-center my-5">

                                <CardItem data={data.data.data} size="big"></CardItem>
                            </div>

                        )
                    }
                </div>
            </Container>
        </>
    )
}