import "./index.css";
// import App from './App';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import Client from "./components/Clients";
import ClientForm from "./components/ClientForm";

class App extends React.Component {
  /*clientInput = React.createRef();*/

  state = {
    clients: [
      { id: 1, nom: "Rabbi Jacob" },
      { id: 2, nom: "Charles Duchemin" },
      { id: 3, nom: "Don Salluste" },
      { id: 4, nom: "Maréchal des Logis-chef Ludovic Cruchot" },
    ],
    /*compteur: 0*/
  };

  /*handleClick= () => {
    const clients = this.state.clients.slice();
    clients.push({id: 4, nom: "Octavian Gosme"})

    this.setState({clients: clients})
  }  fonction flechée pour garder le bon this*/

  handleDelete = (id) => {
    const clients = /*this.state.clients.slice();*/ [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";
    /*const elements = this.state.clients.map((client) => (
      <li>
        {client.nom} <button>X</button>
      </li>
    ));*/
    return (
      <div className="wrapper">
        <h1 className="title">{title}</h1>
        {/*{this.state.compteur}
        <button onClick={this.handleClick}>Click me</button>*/}
        <ul>
          {this.state.clients.map((client) => (
            <Client
              key={client.id}
              details={client}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
