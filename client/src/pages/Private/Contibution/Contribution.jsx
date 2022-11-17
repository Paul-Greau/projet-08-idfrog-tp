import React from 'react';

//import PropTypes from 'prop-types';

import ContributForm from '../../../components/UI/forms/ContributForm/ContributForm';

// CSS
import './contributionStyles.scss';

function Contribution() {
  return (
    <div className="contribut-container">
      <ContributForm />
    </div>
  );
}
Contribution.propTypes = {};

Contribution.defaultProps = {};

export default React.memo(Contribution);
