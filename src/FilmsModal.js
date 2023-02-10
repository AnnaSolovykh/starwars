import { Component } from "react";

class FilmsModal extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
      
      render () {
        return (
          <div>
            <button onClick={this.handleOpenModal}>Trigger Modal</button>
            <ReactModal 
               isOpen={this.state.showModal}
               contentLabel="Minimal Modal Example"
        >
            { this.props.heights.map ( ( height,id ) => (
    <p key={id}>{height}</p>
)) }
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </div>
        );
      }
    }
    
 
export default FilmsModal;
