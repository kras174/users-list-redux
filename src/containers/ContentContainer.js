import Table from "../components/Content/Table";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/contentActions";

const mapStateToProps = (store) => {
  return {
    usersList: store.content.usersList,
    isFetching: store.content.isFetching,
    error: store.content.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
