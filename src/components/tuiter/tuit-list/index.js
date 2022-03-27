import React from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);

    const dispatch = useDispatch();

    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };


    return (

        <div className="wd-bg-grey wd-rounded-corners">
        <ul className="ttr-tuits list-group">
            {

                tuits.map && tuits.map(tuit =>
                                           <>
                                              <div>
                                                  <i onClick={() =>
                                                      deleteTuit(tuit)}
                                                     className="fas fa-remove
                                              fa-pull-right wd-delete-tuit"></i>

                                           <TuitListItem key={tuit._id}
                                                         post={tuit}/>

                                           <hr/>
                                              </div>
                                           </>
                )
            }
        </ul>
        </div>

    );
}

export default TuitList;