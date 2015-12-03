var React = require('react');
var starshipImage = require('../utilities/starshipimage.js');

module.exports = React.createClass({

  displayName: "Ship Renderer",

  render: function() {
    return (
      <g dangerouslySetInnerHTML = {this.renderImage()}></g>
    );
  },

  renderImage: function() {
    var imageInText = starshipImage.renderImageElementAsString(this.props.ship);
    return {__html: imageInText};
  }
});
