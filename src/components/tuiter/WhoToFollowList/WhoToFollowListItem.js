import React from "react";

const WhoToFollowListItem = ( {
                                  who = {
                                      avatarIcon: '../../../images/nasa.png',
                                      userName: 'NASA',
                                      handle: 'NASA',
                                  }
                              }) => {
    return(
            <li className="list-group-item wd-bg-grey list-group-item-follow" >
          <div className="row">
            <div className="col-2">
              <img className="wd-follow-img" src={who.avatarIcon} height="40" width="40"/>
               
            </div>
            <div className="col-6">
              <div className="row">
                <span className="wd-bold wd-text-white">{who.userName}</span>
              </div>
              <div className="row">
                <span className="wd-text-white text-muted">@{who.handle}</span>
              </div>
            </div>
            <div className="col-4">
              <button type="button" className="btn bg-primary btn-follow"><b>Follow</b></button>
            </div>
          </div>
        </li>
    );
}
export default WhoToFollowListItem;
