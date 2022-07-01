function SMButton (props){
    const {loading, label, disabled , onClick} = props
    return(

     <button disabled={disabled} onClick={onClick} className="btn">
        {label}
    </button>
    )
}
export default SMButton