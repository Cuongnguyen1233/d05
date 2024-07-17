import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ComputerEdit({ dbs }) {
    const history = useNavigate();
    const { id } = useParams();
    let index = dbs.map(x => x.id).indexOf(id);
    let editedItem = dbs[index];
    let [name, setName] = useState(editedItem.name);
    let [co, setCo] = useState(editedItem.co);
    let [price, setPrice] = useState(editedItem.price);
    const fnSubmit = (ev) => {
        ev.preventDefault();

        editedItem.name = name;
        editedItem.co = co;
        editedItem.price = price;
        alert('updating succeeded !');
        history("/Computer-view");
    }

    const formStyle = { width: "40%", margin: "auto",  }

    return (
        <div>
            <h3>
                Update Computer Details
            </h3>
            <form style={formStyle} onSubmit={fnSubmit} >
                <div className="mt-3">
                    <label className="form-label">Computer ID</label>
                    <input className="form-control" readOnly
                        value={id} />
                </div>
                <div className="mt-3">
                    <label className="form-label">Computer name</label>
                    <input className="form-control" required
                        onChange={(ev) => setName(ev.target.value)}
                        value={name} />
                </div>
                <div className="mt-3">
                    <label className="form-label">Certificate Original </label>
                    <input className="form-control" required
                        onChange={(ev) => setCo(ev.target.value)}
                        value={co} />
                </div>
                <div className="mt-3">
                    <label className="form-label">price</label>
                    <input className="form-control" type="number" min="0" required
                        onChange={(ev) => setPrice(ev.target.value)}
                        value={price} />
                </div>
                <div className="mt-3">
                    <button className="btn btn-danger"> submit </button>
                </div>
            </form>
        </div>
    )
}