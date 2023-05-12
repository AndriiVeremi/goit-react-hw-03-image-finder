const Button = ({ children, onClick = null }) => {
    return <button type='button' onClick={onClick}>
        {children}
    </button>
}

export default Button