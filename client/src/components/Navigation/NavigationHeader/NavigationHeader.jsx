import React from 'react';
// import PropTypes from "prop-types";

import IdfrogLogo from '../../../assets/images/logo-mini.png';
import './navigationHeaderStyles.scss';

function NavigationHeader() {
  const isLogged = false;

  return (
    <div className="navigation">
      <div className="navigation-left">
        <img src={IdfrogLogo} alt="Mini Logo Idfrog" />
        <button type="button" className="navigation-left-button">
          Liste des Projets
        </button>
      </div>
      <div className="navigation-login">
        {isLogged ? (
          <button type="button" className="navigation-login-button">
            Se déconnecter
          </button>
        ) : (
          <>
            <button type="button" className="navigation-login-button">
              S&apos;inscrire
            </button>
            <button type="button" className="navigation-login-button">
              Se connecter
            </button>
          </>
        )}
      </div>
    </div>
  );
}
NavigationHeader.propTypes = {};

NavigationHeader.defaultProps = {};

export default React.memo(NavigationHeader);
