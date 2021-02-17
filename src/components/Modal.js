import React from 'react'
import Modal from 'react-modal'

const OptionModal = props => (

  <Modal
    className="modal"
    isOpen={ !!props.option }
    contentLabel="Option"
    onRequestClose={ props.close }
    closeTimeoutMS={300}
    ariaHideApp={false}
  >
    { props.option &&
      <section>
        <h2 className="modal__title">
          <a
            target="_blank"
            className="styled-link"
            href={ props.option.data.url }>
            { props.option.data.name }
          </a>
        </h2>

        <div className="modal__artist">
          <h3>
            Artist:
          </h3>
          <a
            target="_blank"
            className="styled-link"
            href={ props.option.data.artist.url }>
            { props.option.data.artist.name }
          </a>
        </div>
        <div className="modal__album">
          <h3>
            Album:
          </h3>
          <a
            target="_blank"
            className="styled-link"
            href={ props.option.data.album.url }>
            { props.option.data.album.title}
          </a>
        </div>
        <p className="modal__action action-button">
          <a
            target="_blank"
            href={ props.option.tabs }>
            Guitar Tabs
          </a>
        </p>
        <ul className="modal__tag-list">
          <h3>
            Tags
          </h3>
          {
            props.option.data.tags.map(element => (
              <li key={ element.name }>
                <a
                target="_blank"
                className="styled-link"
                href={ element.url }>
                  { element.name }
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    }
    <button
      className="action-button"
      onClick={ props.close }
    >
      Okay
    </button>
  </Modal>

)

export default OptionModal