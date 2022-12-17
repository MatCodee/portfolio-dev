import "./index.css";

const Button = ({filter_element,children}) => {
    return (
        <button onClick={() =>filter_element(children)} className="button">{children}</button>
    )
}


export default Button