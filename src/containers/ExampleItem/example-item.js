import { connect } from 'react-redux';

import { getItem } from 'actions/example';
import Item from 'components/Item';

const mapStateToProps = ({ example: { activeItem } }) => (
  { item: activeItem }
);

const mapDispatchToProps = dispatch => (
   { getItem: (id, cb) => dispatch(getItem(id, cb)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Item);
