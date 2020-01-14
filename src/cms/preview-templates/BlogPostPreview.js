import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/generic';

class BlogPostPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }
  componentDidMount() {
    const image = this.props.entry.getIn(['data', 'image'])
    if(image) {
      this.props.getAsset(image).then(value => {
        this.setState({image: value.toString()})
      })
    }
  }

  render(){
    const { entry, widgetFor } = this.props;
    return (
      <BlogPostTemplate
        image={this.state.image}
        content={widgetFor('body')}
        title={entry.getIn(['data', 'title'])}
      />
    )

  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
};

export default BlogPostPreview