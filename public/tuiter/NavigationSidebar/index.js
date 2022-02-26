const NavigationSidebar = (active) => {

    $(document).ready(function() {
        $('a').css('text-decoration','none');
        $('li.list-group-item.' + active).addClass("active");
    });

    return(`
      <ul class="list-group">
        <li class="list-group-item" aria-current="true">
          <i class="fa-brands fa-twitter wd-text-white" aria-hidden="true"></i>
        </li>
        
        <a class="wd-nav-link" href = "../HomeScreen/home.html">
           <li class="list-group-item wd-navigation home" aria-current="true">
          <span class="d-inline"><i class="fa-solid fa-house wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white">Home</span>
        </li>
        </a>

        <a class="wd-nav-link" href = "../ExploreScreen/index.html">
        <li class="list-group-item wd-navigation explore">
          <span class="d-inline"><i class="fa-solid fa-hashtag wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white wd-nav-active">Explore</span>
        </li>
        </a>
        
        <li class="list-group-item">
          <span class="d-inline"><i class="fa-solid fa-bell wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white">Notifications</span>
        </li>
        <li class="list-group-item">
          <span class="d-inline"><i class="fa-solid fa-envelope wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white">Messages</span>
        </li>
        <li class="list-group-item">
          <span class="d-inline"><i class="fa-solid fa-bookmark wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white">Bookmarks</span>
        </li>
        <li class="list-group-item">
          <span class="d-inline"><i class="fa-solid fa-list wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white">Lists</span>
        </li>
        <li class="list-group-item">
          <span class="d-inline"><i class="fa-solid  fa-user wd-text-white" aria-hidden="true"></i></span>
          <span class="d-none d-xl-inline wd-text-white">Profile</span>
        </li>
        <li class="list-group-item">
                    <span class="fa-stack fa-1x d-inline-block">
                    <i class="fas fa-circle fa-stack-1x wd-text-white"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                    </span>
          <span class="d-none d-xl-inline wd-text-white">More</span>
        </li>
      </ul>
      <div class="d-grid gap-2 mt-3">
        <button type="button" class="btn btn-primary btn-follow ">Tuit</button>
      </div>

    `);
}
export default NavigationSidebar;

