

function Button({text, className, img}) {

    return (
        <button className={className}>
            {text}
            {img && <img src={img} alt={text}/>}
        </button>
    )
}

export default Button;