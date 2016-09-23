'use strict';

import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { switchLocation } from '../action-creators/location';

const mapStateToProps = ({ location }) => ({
  location
});

const mapDispatchToProps = dispatch => ({
  go: loc => dispatch(switchLocation(loc))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);