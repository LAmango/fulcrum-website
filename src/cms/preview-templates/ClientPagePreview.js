import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ClientPageTemplate } from '../../templates/client-page'

class ClientPagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }
  _getImage = async gallery => {
    for (let i = 0; i < gallery.length; i ++) {
      const value = await this.props.getAsset(gallery[i].image);
      this.setState({
        gallery: this.state.gallery.concat(
          {image: value.toString(),
            alt: gallery[i].alt})
      })

    }
  }

  componentDidMount() {
    /*
    const entryGallery = this.props.entry.getIn(['data', 'gallery']);
    const gallery = entryGallery ? entryGallery.toJS() : [];
    this._getImage(gallery);
     */
  }

  render() {
    const { entry, getAsset } = this.props;
    const image = {image: getAsset(entry.getIn(['data', 'mainImage'])), alt: "client"}
    return (
      <ClientPageTemplate
        company={entry.getIn(['data', 'company'])}
        mainImage={image}
        /*gallery={this.state.gallery}*/
        content={entry.getIn(['data', 'body'])}
        isMarkdown
      />
    )
  }
}

ClientPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default ClientPagePreview