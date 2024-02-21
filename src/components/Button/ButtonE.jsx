import './ButtonP.css'

const ButtonE = ({ label, className}) => {
    return (
        <>
            <button className={className}>{label}</button>
        </>
    )
}
export default ButtonE