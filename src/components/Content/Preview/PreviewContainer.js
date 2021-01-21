import { connect } from 'react-redux';
import { fetchUsers, starHandler } from '../../../actions/contentActions';
import { Preview } from './Preview';

const mapStateToProps = (store) => ({
	inputFilter: store.filter.inputFilter,
	isEnglish: store.content.isEnglish,
	isFetching: store.content.isFetching,
	sortDirection: store.content.sortDirection,
	sortType: store.content.sortType,
	usersList: store.content.usersList,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
	starHandler: (id) => dispatch(starHandler(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
