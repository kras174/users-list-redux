import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/contentActions';
import { inputFilterAction, inputFilterClear } from '../../actions/filterActions';
import { sortAction, directionAction } from '../../actions/sortActions';
import Header from './Header';

const mapStateToProps = (store) => ({
	inputFilter: store.filter.inputFilter,
	isEnglish: store.content.isEnglish,
	sortDirection: store.content.sortDirection,
	sortType: store.content.sortType,
});

const mapDispatchToProps = (dispatch) => ({
	changeLanguage: () => dispatch(changeLanguage()),
	directionAction: (e) => dispatch(directionAction(e)),
	inputFilterAction: (e) => dispatch(inputFilterAction(e)),
	inputFilterClear: () => dispatch(inputFilterClear()),
	sortAction: (e) => dispatch(sortAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
