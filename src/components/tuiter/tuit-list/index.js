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


                                                  <div>
                                                      Likes: {tuit.likes}
                                                      <i onClick={() => updateTuit(dispatch, {
                                                          ...tuit,
                                                          likes: tuit.likes + 1
                                                      })} className="far fa-thumbs-up ms-2"></i>

                                                  </div>
                                                  <div>
                                                      Dislikes: {tuit.dislikes}
                                                      <i onClick={() => updateTuit(dispatch, {
                                                          ...tuit,
                                                          dislikes: tuit.dislikes + 1
                                                      })} className="far fa-thumbs-down ms-2"></i>

                                                  </div>
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