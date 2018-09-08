import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null :
        return
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return 'im logged in!'
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo'>
            SG-React
          </a>
          <ul className='right'>
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    )
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
