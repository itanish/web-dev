import {useDispatch} from "react-redux";
import React from "react";
import {findAllTuits, deleteTuit, createTuit, updateTuit}
    from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
    <>
        <div className="row mt-2 ms-1">

            <div className="col-2">
                <i className="fa-regular fa-comment wd-grid-col-bookmark-icons"></i>
                <span className="wd-icon-count">{tuit.stats.comments}</span>
            </div>

            <div className="col-2">
                <i className="fa-solid fa-retweet wd-grid-col-bookmark-icons"></i>
                <span className="wd-icon-count">{tuit.stats.retuits}</span>
            </div>

            <div className="col-2">
                <span onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1
                })}>
                {
                    <i className="fas fa-thumbs-up me-1"
                       ></i>
                }

                    {tuit.likes}
                </span>

            </div>

            <div className="col-2">
                <span onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                })}>
                {
                    <i className="fas fa-thumbs-down me-1"
                    ></i>
                }

                    {tuit.dislikes}
                </span>

            </div>

            <div className="col-2">
                <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                                {
                                    !tuit.liked &&
                                    <i className="far fa-heart me-1"></i>
                                }
                                {tuit.stats && tuit.stats.likes}
                </span>

            </div>

            <div className="col-2">
                <i className="fa-solid fa-arrow-up-from-bracket wd-grid-col-bookmark-icons"></i>
            </div>

        </div>
    </>

    );
}
export default TuitStats;