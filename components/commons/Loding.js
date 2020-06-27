import React from 'react'

const Loading = () => {
  return (
    <div className={`flex justify-center h-64`}>
      <article className="spinner" />
      <style jsx>{`
        .spinner {
          position: relative;
          color: #86a8e7 !important;
          pointer-events: none;
        }

        .spinner::after {
          content: '';
          position: absolute !important;
          top: calc(50% - (5em / 2));
          left: calc(50% - (5em / 2));
          display: block;
          width: 5em;
          height: 5em;
          border: 2px solid currentColor;
          border-radius: 9999px;
          border-right-color: transparent;
          border-top-color: transparent;
          animation: spinAround 500ms infinite linear;
        }

        @keyframes spinAround {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Loading
