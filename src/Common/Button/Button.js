import s from './Button.module.css'

function Button(props) {
    return (
        <div >
            {/*<a href="" className={s.borderButton}>{props.title}</a>*/}
            <button type={"submit"} className={s.borderButton}>{props.title}</button>
        </div>
    );
}

export default Button;