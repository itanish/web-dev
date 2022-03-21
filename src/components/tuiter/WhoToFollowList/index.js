import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
import React from "react";

const WhoToFollowList = () => {
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
