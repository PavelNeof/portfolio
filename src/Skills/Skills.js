import React from "react";
import s from './Skills.module.css'
import sContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={s.block}>
            <div className={`${s.container}`}>
                <h2 className={"title"}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. ' +
                        'Pellentesque iaculis accumsan felis. Mauris suscipit dui quis sem venenatis, quis ultricies tellus sagittis. ' +
                        'Pellentesque est velit, hendrerit in tristique vitae, ultrices nec enim.'}/>
                    <Skill title={'Css'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. ' +
                        'Pellentesque iaculis accumsan felis. Mauris suscipit dui quis sem venenatis, quis ultricies tellus sagittis. ' +
                        'Pellentesque est velit, hendrerit in tristique vitae, ultrices nec enim.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. ' +
                        'Pellentesque iaculis accumsan felis. Mauris suscipit dui quis sem venenatis, quis ultricies tellus sagittis. ' +
                        'Pellentesque est velit, hendrerit in tristique vitae, ultrices nec enim.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
