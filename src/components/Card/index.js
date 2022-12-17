import "./index.css";
import { Link } from "react-router-dom";

const Card = (props) => {
    const {title,date,id} = props.data
    return (
        <>
            <Link to={`/detail/${id}`} style={{textDecoration:'none'}}> 
                <div className="container-card">
                    <div className="background-element">
                        <div className="card-info">
                            <p>{date}</p>
                            <h3>{title}</h3>
                        </div>
                    </div>

                </div>
            </Link>

        </>
    )
}

export default Card