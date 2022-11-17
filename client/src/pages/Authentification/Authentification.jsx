import React from 'react';

import Footer from '../../components/Footer/Footer';
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';

// import PropTypes from 'prop-types';

//import './homeStyles.scss';

import TopFooter from '../../components/TopFooter/TopFooter';

function Authentification() {
  return (
    <>
      <NavigationHeader />
      <TopFooter />
      <Footer />
    </>
  );
}
Authentification.propTypes = {};

Authentification.defaultProps = {};

export default React.memo(Authentification);
