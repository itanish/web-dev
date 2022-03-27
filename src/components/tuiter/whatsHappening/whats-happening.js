import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./whatsHappening.css";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
                     tuit: whatsHappening
                 });
    }


    return (
        <>
            <div className={"row"}>
                <div className="col-1">
                    <img className="wd-post-avatar" src="../tuiter/images/inspiration.jpeg"/>
                </div>
                <div className="col-11">
      <textarea className="wd-new-tuit" placeholder={"What's happening?"} value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>

                </div>

            </div>
            <div className={"row"}>
                <div className="col-6">
                    <i className="fa-solid fa-image wd-wh-icon"></i>
                    <i className="fa-solid fa-chart-line wd-wh-icon"></i>
                    <i className="fa-solid fa-face-smile wd-wh-icon"></i>
                    <i className="fa-solid fa-calendar wd-wh-icon"></i>
                </div>

                <div className="col-6">
                    <button className={"btn btn-primary wd-new-button"} onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>

            </div>
        </>
    );
}
export default WhatsHappening;

