const React = require('react')

const MyTitle = React.createClass({
  render () {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
