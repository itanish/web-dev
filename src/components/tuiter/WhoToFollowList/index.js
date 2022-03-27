import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
      <ul className="list-group wd-rounded-corners">
        <li className="list-group-item wd-bg-grey" aria-current="true">
          <span className="wd-bold wd-text-white">Who To Follow</span>
        </li>

          {
              who.map(who => {
                  return(
                      <WhoToFollowListItem who={who}/>
                  );
              })
          }

      </ul>
); }

export default WhoToFollowList;
