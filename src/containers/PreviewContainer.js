import { connect } from "react-redux";
import { fetchUsers, starHandler } from "../actions/contentActions";
import Preview from "../components/Content/Preview";

const mapStateToProps = (store) => ({
  usersList: store.content.usersList,
  isFetching: store.content.isFetching,
  error: store.content.error,
  isFiltering: store.content.isFiltering,
  inputFilter: store.filter.inputFilter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  starHandler: (id) => dispatch(starHandler(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
