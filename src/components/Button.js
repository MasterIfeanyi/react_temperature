const Button = ({sumTotal, totalIncome, items}) => {

    const styling = {
        fontWeight: "900",
        fontFamily: "arial",
        background: "black",
        color: "white",
        border: "none",
        padding: "6px 10px",
        letterSpacing: "2px",
        borderRadius: "5px"
    }
    

    return (
        <>
            <button className='btn' id="btn" onClick={() => sumTotal(items)} >Sum Total</button>
             <span style={styling}>{totalIncome}</span>
        </>
    )
}

export default Button
