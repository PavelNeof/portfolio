import React from "react";
import sContainer from "../Common/Styles/Container.module.css";
import s from "./Works.module.css";
import Work from "./Work/Work";

function Works() {
    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>Works</h2>
                <div className={s.works}>
                <Work title={'work1'} picture={'picture'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                          'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
                <Work title={'work2'} picture={'picture'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                          'Nam rhoncus fringilla lacus in venenatis. Nam tristique lectus sed fringilla scelerisque. '}/>
            </div>
            </div>
        </div>
    );
}

export default Works;