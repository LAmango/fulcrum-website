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

  _getImage = async image => {
    const value = await this.props.getAsset(image);
    this.setState({image: value.toString()})
  }

  componentDidMount() {
    const image = this.props.entry.getIn(['data', 'image'])
    if(image) {
      //this._getImage(image);
    }
  }

  render(){
    const { entry } = this.props;
    return (
      <BlogPostTemplate
        image={this.props.getAsset(this.props.entry.getIn(['data', 'image']))}
        content={entry.getIn(['data', 'body'])}
        title={entry.getIn(['data', 'title'])}
        bodyIsMarkdown
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