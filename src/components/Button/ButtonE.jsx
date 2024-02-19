import './ButtonP.css'

const ButtonE = ({ label, customclass}) => {
    return (
        <>
            <button className={`${customclass}`}>{label}</button>
        </>
    )
}
export default ButtonE