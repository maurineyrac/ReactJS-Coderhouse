import './ButtonP.css'

const ButtonAlt = ({ label, callback}) => {
    return (
        <>
            <button className='Custombutton2' onClick={() => callback()} >{label}</button>
        </>
    )
}
export default ButtonAlt