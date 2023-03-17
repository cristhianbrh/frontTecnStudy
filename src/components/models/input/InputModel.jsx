import './style.css'

const InputModel = ({ tag }) => {
    return (
        <div className={'InputModel'} >
            <input type="text" required />
            <span>{tag}</span>
        </div>
    )
}
export default InputModel;