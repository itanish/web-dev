import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./whatsHappening.css";
import {createTuit,}
    from "../actions/tuits-actions";

const WhatsHappening = () => {
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        createTuit(dispatch, newTuit)
    }


    return (
        <>
            <div className={"row"}>
                <div className="col-1">
                    <img className="wd-post-avatar" src="../tuiter/images/avatar.png"/>
                </div>
                <div className="col-11">


                    <textarea className="wd-new-tuit form-control" placeholder={"What's happening?"}
                              onChange={(e) =>
                                  setNewTuit({...newTuit,
                                                 tuit: e.target.value})}></textarea>


                </div>

            </div>
            <div className={"row mt-2"}>
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

