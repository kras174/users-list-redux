import { connect } from "react-redux";
import { fetchUsers } from "../actions/contentActions";
import Preview from "../components/Content/Preview";

const mapStateToProps = (store) => ({
  usersList: store.content.usersList,
  isFetching: store.content.isFetching,
  error: store.content.error,
  previewContent: store.content.previewContent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
