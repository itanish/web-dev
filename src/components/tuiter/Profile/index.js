import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './profile.css';

const ProfileScreen = () => {

    const profileData = useSelector(
        state => state.profileData);

    var joinedParts = profileData.dateJoined.split('/');

    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    let joinedDate = monthNames[joinedParts[0]-1] + " " + joinedParts[1];

    var bornParts = profileData.dateOfBirth.split('/');
    let bornDate = monthNames[bornParts[0]-1] + " " + bornParts[1] + ", " + bornParts[2];


    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fa-solid fa-arrow-left align-middle wd-back-button wd-text-white"></i>
                </div>
                <div className="col-11">
                    <div className="row">
                        <span className="wd-bold wd-text-white">
                            {profileData.firstName} {profileData.lastName}
                        </span>
                    </div>
                    <div className="row">
                        <span>
                        2000 Tuits
                        </span>
                    </div>
                </div>
            </div>

            <div className="row">
                <img className="wd-profile-cover" src={profileData.bannerPicture}
                     id="header-background-id" alt="background-img"/>
            </div>

            <div>
            <img className="wd-profile-picture"
                     src={profileData.profilePicture} alt="profile-picture"/>
                <Link to="/tuiter/edit-profile"
                      className="wd-nav-link"><button type="button" className="btn btn-outline-primary wd-edit-button">Edit Profile</button>
                      </Link>

            </div>

            <div className="row">
                <span className="wd-bold wd-profile-name">
                            {profileData.firstName} {profileData.lastName}
                        </span>
            </div>
            <div className="row">
                <span>
                            @{profileData.handle}
                        </span>
            </div>

            <div className="row">
                <span className="wd-profile-bio">
                            {profileData.bio}
                        </span>
            </div>

            <div className="row">
                <div className="col">
                    <i className="fa-solid fa-location-dot "></i>
                    <span className="wd-profile-handle">
                        {profileData.location}
                    </span>

                    <i className="fa-brands fa-fly wd-profile-details"></i>
                    <span className="wd-profile-handle">
                        Born {bornDate}
                    </span>
                    <i className="fa-solid fa-calendar-days wd-profile-details"></i>
                    <span className="wd-profile-handle">

                        Joined {joinedDate}
                    </span>
                </div>
            </div>

            <div className="row wd-left">
                <div className="col">
                    <span className=" wd-text-white wd-bold">
                        {profileData.followingCount}
                    </span>

                    <span className="wd-profile-details">
                        Following
                    </span>

                </div>
                <div className="col">
                    <span className="wd-profile-handle wd-text-white wd-bold">
                        {profileData.followersCount}
                    </span>
                    <span className="wd-profile-details">
                        Followers
                    </span>
                </div>

            </div>

        </div>
    )
}

export default ProfileScreen;