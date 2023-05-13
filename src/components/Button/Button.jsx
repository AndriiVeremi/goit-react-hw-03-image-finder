import { Buttons } from './button.styled';

const Button = ({ children, onClick = null }) => {
    return <Buttons type='button' onClick={onClick}>
        {children}
    </Buttons>
}

export default Button