import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
      <ul class="list-group wd-rounded-corners">
        <li class="list-group-item wd-bg-grey" aria-current="true">
          <span class="wd-bold wd-text-white">Who To Follow</span>
          </li>
            ${
                who.map(data => {
                    return(WhoToFollowListItem(data));
                }).join('')
            }

            </ul>
`); }

export default WhoToFollowList;
