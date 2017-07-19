import { connect } from 'react-redux';

import { getData } from 'actions/example';
import ListItems from 'components/ListItems';

const mapStateToProps = ({ example: { data, error, loading } }) => ({ data, error, loading });

const mapDispatchToProps = dispatch => ({ getData: () => dispatch(getData()) });

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
