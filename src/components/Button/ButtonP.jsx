import './ButtonP.css'
const ButtonP = ({ className, label, callback, stock1 }) => {
    return (
        <>
            <button className={`${className} Custombutton2`} onClick={() => callback()} disabled={!stock1} >{label}</button>
        </>
    )
}
export default ButtonP