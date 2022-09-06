import React  from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <React.Fragment>
      <h3>{props.userNames}</h3>
      <p><em>{props.tweet}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Profile.propTypes = {
  userNames: PropTypes.string,
  tweet: PropTypes.string
};

export default Profile;