import { connect } from 'react-redux';
import { deleteUser, fetchUsers } from '../../../actions/contentActions';
import { Table } from './Table';

const mapStateToProps = (store) => ({
	inputFilter: store.filter.inputFilter,
	isFetching: store.content.isFetching,
	sortDirection: store.content.sortDirection,
	sortType: store.content.sortType,
	usersList: store.content.usersList,
});

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(deleteUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
