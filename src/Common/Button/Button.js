import s from './Button.module.css'

function Button(props) {
    return (
        <div className={s.button}>
            <button>
                {props.title}
            </button>
        </div>
    );
}

export default Button;