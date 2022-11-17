import React from 'react';
import ProfileForm from '../../../components/UI/forms/ProfileForm/ProfileForm';
// import PropTypes from 'prop-types';

// CSS
import './profileStyles.scss';

function Profile() {
  return (
    <div className="profile">
      <ProfileForm />
    </div>
  );
}
Profile.propTypes = {};

Profile.defaultProps = {};

export default React.memo(Profile);
