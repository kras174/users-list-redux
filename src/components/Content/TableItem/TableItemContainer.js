import { connect } from 'react-redux';
import { saveUser, starHandler } from '../../../actions/contentActions';
import TableItem from './TableItem';

const mapStateToProps = (store) => ({
    isEnglish: store.content.isEnglish,
});

const mapDispatchToProps = (dispatch) => ({
    saveUser: (id, name, phone) => dispatch(saveUser(id, name, phone)),
	starHandler: (id) => dispatch(starHandler(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
