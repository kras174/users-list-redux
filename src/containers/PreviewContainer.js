import { connect } from "react-redux";
import { starHandler } from "../actions/contentActions";
import Preview from "../components/Content/Preview";

const mapStateToProps = (store) => ({
  usersList: store.content.usersList,
  isFetching: store.content.isFetching,
  error: store.content.error,
  inputFilter: store.filter.inputFilter,
});

const mapDispatchToProps = (dispatch) => ({
  starHandler: (id) => dispatch(starHandler(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
