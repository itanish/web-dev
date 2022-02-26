const WhoToFollowListItem = (who) => {
    return(`
            <li class="list-group-item wd-bg-grey list-group-item-follow" >
          <div class="row">
            <div class="col-2">
              <img class="wd-follow-img" src=${who.avatarIcon} height="40" width="40"/>
               
            </div>
            <div class="col-6">
              <div class="row">
                <span class="wd-bold wd-text-white">${who.userName}</span>
              </div>
              <div class="row">
                <span class="wd-text-white text-muted">@${who.handle}</span>
              </div>
            </div>
            <div class="col-4">
              <button type="button" class="btn bg-primary btn-follow"><b>Follow</b></button>
            </div>
          </div>
        </li>
    `);
}
export default WhoToFollowListItem;
