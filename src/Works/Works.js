import React from "react";
import sContainer from "../Common/Styles/Container.module.css";
import s from "./Works.module.css";
import Work from "./Work/Work";
import socialNetworkImage from "./../assets/image/soc.jpg"
import TodoImage from "./../assets/image/to-do-list.jpg"
import CounterImage from "./../assets/image/count.jpg"


function Works() {
    const socialNetwork = {
        backgroundImage: `url( ${socialNetworkImage})`,
    };
    const Todolist = {
        backgroundImage: `url( ${TodoImage})`,
    };
    const counter = {
        backgroundImage: `url( ${CounterImage})`,
    };

    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={"title"}>Works</h2>

                <div className={s.works}>
                    <Work style={socialNetwork} title={'Social network'} picture={'picture'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                              'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
                    <Work style={Todolist} title={'Todolist'} picture={'picture'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                              'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
                    <Work style={counter} title={'Counter'} picture={'picture'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                              'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
                </div>

            </div>
        </div>
    );
}

export default Works;