import { Card } from "react-bootstrap";

export function CardItem({ data, size }) {
    
    return (
        <Card className={size === "small" ? "h-100" : "h-50 w-50"}>
            <Card.Img src={data.images.fixed_width.url} alt="gif"></Card.Img>
            <Card.Body className="d-flex align-items-end">
                <div className="">
                    <hr />
                    <p className="">
                        {data.title}
                    </p>
                </div>
            </Card.Body>

        </Card>
    )

}