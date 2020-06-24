import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js'

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  setRef(el) {
    this.codeEl = el
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl)
  }

  render() {
    return (
      <pre
        style={{
          padding: '0.2em 0.4em',
          margin: 0,
          fontSize: '85%',
          backgroundColor: 'rgba(27, 31, 35, 0.05)',
          borderRadius: '3px'
        }}>
        <code
          ref={this.setRef}
          className={`language-${this.props.language}`}
          style={{
            padding: '0.2em 0.4em',
            margin: 0,
            backgroundColor: 'transparent',
            borderRadius: '3px'
          }}>
          {this.props.value}
        </code>
      </pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: ''
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock
