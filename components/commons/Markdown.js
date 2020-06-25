import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import ThemeContext from '../../lib/context/ThemContext'

const Markdown = ({ source, className, style }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div style={style} className={`${className} markdown `}>
      <ReactMarkdown
        source={source}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
      <style jsx global>{`
        .markdown > * {
          margin-bottom: 10px;
          border-color: #718096;
        }

        .markdown blockquote {
          margin-left: 0px;
          margin-right: 0px;
          padding-left: 10px;
          padding-right: 10px;
          border-left: 2px solid #cbd5e0;
        }

        .markdown table {
          display: block;
          width: 100%;
          overflow: auto;
        }

        .markdown table th {
          font-weight: 600;
          background-color: rgba(27, 31, 35, 0.05);
        }

        .markdown table td,
        table th {
          padding: 6px 13px;
          border: 1px solid #dfe2e5;
        }

        .markdown table tr {
          border-top: 1px solid #c6cbd1;
        }

        .markdown table tr:nth-child(2n) {
          background-color: rgba(27, 31, 35, 0.05);
        }

        .markdown li {
          margin-left: 25px;
        }
        .markdown ul {
          list-style-type: circle;
        }

        .markdown ol {
          list-style-type: decimal;
        }

        .markdown code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgb(243, 243, 243);
          border-radius: 3px;
          margin-bottom: 10px;
        }

        .markdown a {
          color: #4299e1;
        }

        .markdown a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default Markdown
