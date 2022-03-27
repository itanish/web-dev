import profileData from '../data/profileData.json'
import {prettyFormat} from "@testing-library/react";

const profileReducer = (state = profileData, action) => {

    switch (action.type) {
        case 'edit-profile':
            profileData.firstName = action.fname;
            profileData.lastName = action.lname;
            profileData.bio = action.bio;
            profileData.location = action.location;
            profileData.website = action.website;
            return profileData;

        default:
            return profileData;
    }
}

export default profileReducer;

