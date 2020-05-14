import { connect } from "react-redux";
import { fetchUsers, starHandler } from "../actions/contentActions";
import Table from "../components/Content/Table";

const mapStateToProps = (store) => ({
  usersList: store.filter.filteredUsers,
  // usersList: store.content.usersList,
  isFetching: store.content.isFetching,
  error: store.content.error,
  isFavourite: store.content.isFavourite,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  starHandler: (id) => dispatch(starHandler(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
