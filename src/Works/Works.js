import React from "react";
import sContainer from "../Common/Styles/Container.module.css";
import s from "./Works.module.css";
import Work from "./Work/Work";
import SocialNetworkImage from "./../assets/image/works/soc.jpg"
import LearnCards from "./../assets/image/works/learn.jpg"
import TodoImage from "./../assets/image/works/todolist.jpg"
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

        <div id={'works'} className={s.block}>
            <div className={s.container}>
                <h2 className={'title'}>Projects</h2>
                <Zoom>
                    <div className={s.works}>
                        <div className={s.zoom}>
                            <Zoom>
                                <Work style={socialNetwork} title={'Social network'} picture={'picture'}
                                      //description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                      //'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}
                                      description={'The social network is made with live users, with the ability to register on the server, follow / unfollow other users and edit self profile.'}
                                      href={'https://pavelneof.github.io/samurai-way/'}/>
                            </Zoom>
                        </div>
                        <div className={s.zoom}>
                            <Zoom>
                                <Work style={learnCards} title={'Learn Cards'} picture={'picture'}
                                    //description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                    //'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}
                                      description={'A project created to create decks of cards with questions and learn from them.'}
                                      href={'https://friday-project.vercel.app/#/login'}/>
                            </Zoom>
                        </div>
                        <div className={s.zoom}>
                            <Zoom>
                                <Work style={Todolist} title={'Todolist'} picture={'picture'}
                                      //description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                      //'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}
                                      description={'Creation of lists and tasks. The ability to track, sort and delete them by interacting with the server.'}
                                      href={'https://pavelneof.github.io/todo16v2/'}/>
                            </Zoom>
                        </div>
                        <div className={s.zoom}>
                            <Zoom>
                                <Work style={homeworks} title={'Homeworks'} picture={'picture'}
                                    //description={'Эта работа направлена на демонстрацию наличия базовых навыков работы в React '}
                                      description={'This work is aimed at demonstrating the basic skills of working in React '}
                                      href={'https://pavelneof.github.io/fromignat/#/junior'}/>
                            </Zoom>
                        </div>
                        <div className={s.zoom}>
                            <Zoom>
                                <Work style={counter} title={'Counter'} picture={'picture'}
                                    //description={'Эта работа показывает наличие навыков работы с localStorage'}
                                      description={'This work shows the presence of skills in working with localStorage'}
                                      href={'https://counter-brown-zeta.vercel.app/'}/>
                            </Zoom>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>

    );
}

export default Works;