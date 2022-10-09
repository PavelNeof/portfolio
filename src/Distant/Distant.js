import React from "react";
import s from './Distant.module.css'
import Button from "../Common/Button/Button";


function Distant() {
    return (
        <div className={s.distant}>
        <div className={s.container}>
            <h2 className={"title"}>Рассматриваю варианты удалённой работы</h2>
          {/*<button>Нанять меня</button>*/}
            <Button title={'Нанять меня'}/>
        </div>
        </div>
    );
}

export default Distant;
