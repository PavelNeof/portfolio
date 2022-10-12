import s from './Button.module.css'

function Button(props) {
    return (
        <div >
            <a href="" className={s.borderButton}>{props.title}</a>
        </div>
    );
}

export default Button;