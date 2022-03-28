import {Link} from "react-router-dom";
import React, {useState} from "react";
import './edit-profile.css';
import {useSelector, useDispatch} from "react-redux";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

const EditProfileScreen = () => {

    const profileData = useSelector(
        state => state.profileData);

    let [fname, setFName]
        = useState(profileData.firstName);

    let [lname, setLName]
        = useState(profileData.lastName);

    const setName = (name) => {
        const splitName = name.split(" ");
        setFName(splitName[0]);
        if (splitName[1] === undefined) {
            setLName("");
        }
        else {
            setLName(splitName[1]);
        }
    }
    let [bio, setBio]
        = useState(profileData.bio);

    let [location, setLocation]
        = useState(profileData.location);

    let [website, setWebsite]
        = useState(profileData.website);

    const [bornDate, setBornDate]
        = useState(profileData.dateOfBirth);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const editProfileClickHandler = () => {
        dispatch({
                     type: 'edit-profile',
                     fname: fname,
                     lname: lname,
                     bio : bio,
                     website: website,
                     location: location,
                     bornDate: bornDate
                 });
    }
        return(
        <div>
            <div className="row">
                <div className="col">
                    <Link to="/tuiter/profile">
                    <i className="fa-solid fa-xmark align-middle wd-cross-button wd-text-white"></i>
                    </Link>
                    <span className="wd-bold wd-text-white wd-edit-text">
                            Edit Profile
                        </span>
                    <Link to="/tuiter/profile"
                          className="wd-nav-link"><button type="button" onClick={editProfileClickHandler} className="btn btn-outline-primary wd-save-button">Save</button>
                    </Link>

                </div>
            </div>

            <div className="row">
                <img className="wd-profile-cover" src={profileData.bannerPicture}
                     id="header-background-id" alt="background-img"/>
            </div>

            <div>
                <img className="wd-profile-picture"
                     src={profileData.profilePicture} alt="profile-picture"/>

            </div>

            <div className="row">
                <div className='full-input'><label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={fname + " " + lname}
                           onChange={(event) =>
                               setName(event.target.value)}></input>
                </div>
            </div>

            <div className="row">
                <div className='full-input'><label htmlFor='bio'>Bio</label>
                    <textarea className="wd-textarea-bio" value={bio} type='text' name='bio'
                              onChange={(event) =>
                                  setBio(event.target.value)}></textarea>
                </div>
            </div>
            <div className="row">
                <div className='full-input'><label htmlFor='location'>Location</label>
                    <input type='text' name='location' value={location}
                           onChange={(event) =>
                               setLocation(event.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className='full-input'><label htmlFor='website'>Website</label>
                    <input type='text' name='website' value={website}
                           onChange={(event) =>
                               setWebsite(event.target.value)}></input>
                </div>
            </div>

            <div className="row">
                <label className={"wd-date-label"}>Birth date:</label>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        value={bornDate}
                        format={"MMMM D, yyyy"}
                        onChange={setBornDate}
                    />

                </MuiPickersUtilsProvider>

            </div>

        </div>

    )
}
export default EditProfileScreen;

