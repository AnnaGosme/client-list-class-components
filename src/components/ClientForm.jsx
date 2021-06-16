import { Component } from "react"; 

class ClientForm extends Component {
  state = {
    nouveauClient:' '
  }
  
  handleChange = (event) => {
    this.setState({ nouveauClient: event.currentTarget.value});
  }
  handleSubmit = event => {
    event.preventDefault();
    /*console.log(this.clientInput.current.value)*/
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClientAdd({id, nom});

    this.setState({ nouveauClient: '' });
  }

   


render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input /*ref={this.clientInput}*/ value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client" />
        <button className="btn-confirmer">Confirmer</button>
      </form>
    )
}
}

export default ClientForm;