import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
        let r = document.querySelector('html');
        window.requestAnimationFrame(() => r.style.scrollBehavior = 'auto');
        setTimeout(this.scrollNow(), 100);
        // r.style.setProperty('--scroll', 'smooth');
    }
  }

  scrollNow() {
    window.scrollTo({
        left: 0,
        top: 0
    });
    let r = document.querySelector('html');
    r.style.scrollBehavior = 'smooth';
  }

  render() {

    const { component: Component, toggle, ...rest } = this.props;

    return <Route {...rest} render={props => (<Component {...props} toggle={toggle} />)} />;
  }

}

// proptypes

export default withRouter(ScrollToTopRoute);