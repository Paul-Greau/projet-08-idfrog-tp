import React, { useState, useEffect } from "react";
import ProfileForm from "../../../components/UI/forms/ProfileForm/ProfileForm";
import ProfilePlaceholder from "../../../components/UI/Placeholder/ProfilePlaceholder";
// import PropTypes from 'prop-types';

// CSS
import "./profileStyles.scss";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="profile">
      {!isLoading ? <ProfileForm /> : <ProfilePlaceholder />}
    </div>
  );
}
Profile.propTypes = {};

Profile.defaultProps = {};

export default React.memo(Profile);
