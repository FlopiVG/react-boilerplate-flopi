import { connect } from 'react-redux';

import { getData } from 'actions/example';
import ListItems from 'components/ListItems';

const mapStateToProps = ({ example }) => ({ data: example.data });

const mapDispatchToProps = dispatch => ({ getData: () => dispatch(getData()) });

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
