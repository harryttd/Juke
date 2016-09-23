'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';

const mapStateToProps = ({ album }) => ({
  album
});

export default connect(
  mapStateToProps
)(Album);