import Button from "react-bootstrap/Button";

function footer (prop){
    return(

        
        <div className="footer">
        <hr></hr>
        <h2>{prop.Footer}</h2>
        <p>{prop.Text}</p>
        <Button variant="primary">Click</Button>
        
        
        </div>
    )
}

export default footer

