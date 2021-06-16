const Clients = ({ details, onDelete}) => (
  <div className="card">
 <li className="nom">
    {details.nom}{" "} 
  </li>
  <button className="delete_button" onClick={() => onDelete(details.id)}>X</button>
  </div>
);
 

export default Clients;