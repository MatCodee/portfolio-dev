import "./index.css";

const Button = ({handleFilter ,children}) => {
    return (
        <button onClick={() =>handleFilter (children)} className="button">{children}</button>
    )
}
export default Button