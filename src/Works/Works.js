import React from "react";
import sContainer from "../Common/Styles/Container.module.css";
import s from "./Works.module.css";
import Work from "./Work/Work";
import SocialNetworkImage from "./../assets/image/works/soc.jpg"
import LearnCards from "./../assets/image/works/soc.jpg"
import TodoImage from "./../assets/image/to-do-list.jpg"
import CounterImage from "./../assets/image/works/counter.jpg"
import Homeworks from "./../assets/image/works/homeworks.jpg"
import Zoom from 'react-reveal/Zoom';


function Works() {
    const socialNetwork = {
        backgroundImage: `url( ${SocialNetworkImage})`,
    };
    const learnCards = {
        backgroundImage: `url( ${LearnCards})`,
    };
    const Todolist = {
        backgroundImage: `url( ${TodoImage})`,
    };
    const counter = {
        backgroundImage: `url( ${CounterImage})`,
    };
    const homeworks = {
        backgroundImage: `url( ${Homeworks})`,
    };

    return (

        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={"title"}>Works</h2>
                <Zoom>
                    <div className={s.works}>
                      {/*  <div className={s.zoom}>*/}
                        <Work style={socialNetwork} title={'Social network'} picture={'picture'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                  'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
                       {/* </div>*/}
                        <Work style={learnCards} title={'Learn Cards'} picture={'picture'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                  'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>

                        <Work style={Todolist} title={'Todolist'} picture={'picture'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                  'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>

                        <Work style={homeworks} title={'Homeworks'} picture={'picture'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                  'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>

                        <Work style={counter} title={'Counter'} picture={'picture'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                  'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
                    </div>
                </Zoom>
            </div>
        </div>

    );
}

export default Works;