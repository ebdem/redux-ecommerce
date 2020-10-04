import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { List, Segment } from "semantic-ui-react";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return (
      <div>
        <h3>Categories </h3>
        <Segment inverted>
          <List divided inverted relaxed>
            {this.props.categories.map((category) => (
              <List.Item>
                <List.Content>{category.categoryName}</List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>
        <h5>Seçili Kategori : {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);