import { connect } from 'react-redux';
import { addUser } from '../../../actions/contentActions';
import AddUserForm from './AddUserForm';

const mapStateToProps = (store) => ({
	isEnglish: store.content.isEnglish,
});

const mapDispatchToProps = (dispatch) => ({
	addUser: (user) => {
        dispatch(addUser(user));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
