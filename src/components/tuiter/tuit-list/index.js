import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits, deleteTuit, createTuit, updateTuit}
    from "../actions/tuits-actions";

const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);

    const dispatch = useDispatch();

    useEffect(() =>
                  findAllTuits(dispatch),
              []);

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    return (

        <>

        <div className="wd-bg-grey wd-rounded-corners">


        <ul className="ttr-tuits list-group">

            {



                tuits.map && tuits.map(tuit =>
                                           <>
                                              <div>


                                                  <i className="fas fa-remove float-end wd-delete-tuit"
                                                     onClick={() => deleteTuit(
                                                         dispatch, tuit)}></i>
                                           <TuitListItem key={tuit._id}
                                                         post={tuit}/>


                                           <hr/>
                                              </div>
                                           </>
                )
            }
        </ul>
        </div>
        </>
    );
}

export default TuitList;