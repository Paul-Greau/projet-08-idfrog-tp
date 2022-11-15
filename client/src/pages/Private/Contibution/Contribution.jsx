import React, { useState, useEffect } from "react";

//import PropTypes from 'prop-types';

import ContributForm from "../../../components/UI/forms/ContributForm/ContributForm";
import ContributPlaceholder from "../../../components/UI/Placeholder/ContributPlaceholder";

// CSS
import "./contributionStyles.scss";

function Contribution() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="contribut-container">
      {!isLoading ? <ContributPlaceholder /> : <ContributForm />}
    </div>
  );
}
Contribution.propTypes = {};

Contribution.defaultProps = {};

export default React.memo(Contribution);
