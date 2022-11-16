import React from 'react';
import { useParams } from 'react-router-dom';

//import PropTypes from 'prop-types';

import ContributForm from '../../../components/UI/forms/ContributForm/ContributForm';

// CSS
import './contributionStyles.scss';



function Contribution() {
  const { id } = useParams()
  console.log('contributions', id);

  return (
    <div className="contribut-container">
      <ContributForm 
      projectId={id}
      />
    </div>
  );
}
Contribution.propTypes = {};

Contribution.defaultProps = {};

export default React.memo(Contribution);
