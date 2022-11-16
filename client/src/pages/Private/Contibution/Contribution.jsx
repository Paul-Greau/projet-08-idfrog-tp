<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from 'react';
import { useParams } from 'react-router-dom';
>>>>>>> a6988febd69fb7ab63ea8c0c8e1eb9dec79b2243

//import PropTypes from 'prop-types';

import ContributForm from "../../../components/UI/forms/ContributForm/ContributForm";
import ContributPlaceholder from "../../../components/UI/Placeholder/ContributPlaceholder";

// CSS
import "./contributionStyles.scss";



function Contribution() {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="contribut-container">
      {!isLoading ? <ContributPlaceholder /> : <ContributForm />}
=======
  const { id } = useParams()
  console.log('contributions', id);

  return (
    <div className="contribut-container">
      <ContributForm 
      projectId={id}
      />
>>>>>>> a6988febd69fb7ab63ea8c0c8e1eb9dec79b2243
    </div>
  );
}
Contribution.propTypes = {};

Contribution.defaultProps = {};

export default React.memo(Contribution);
