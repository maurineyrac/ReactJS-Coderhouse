import './ButtonP.css'
const ButtonP = ({ label, callback, stock1 }) => {
    return (
        <>
            <button className='Custombutton2' onClick={() => callback()} disabled={!stock1} >{label}</button>
        </>
    )
}
export default ButtonP