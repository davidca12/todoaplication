import React, { Component } from "react";
//import ReactDOM from "react-dom";
const data = [
	{ id: 1, description: "Comer" },
	{ id: 2, description: "Dormir" },
	{ id: 3, description: "Estudiar React" },
	{ id: 4, description: "Tomar dos vasos de agua" }
];

export default class Lista extends Component {
	state = {
		data: data /*para almacenar la lista de personajes*/,
		form: {
			description: "What need to be done"
		}
	};

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};
	insertar = () => {
		var valorNuevo = { ...this.state.form };
		var lista = this.state.data;
		lista.push(valorNuevo);
		this.setState({ data: lista });
	};
	eliminar = dato => {
		var opcion = window.confirm("Quiere eliminar?" + dato.description);
		if (opcion) {
			var contador = 0;
			var lista = this.state.data;
			lista.map(registro => {
				if (registro.id == dato.id) {
					lista.splice(contador, 1);
				}
				contador++;
			});
			this.setState({ data: lista });
		}
	};
	render() {
		return (
			<>
				<input
					className="form-control"
					type="text"
					name="description"
					value={this.state.form.description}
					onChange={this.handleChange}
				/>
				<button onClick={() => this.insertar()}>insertar</button>
				<ul className="list-group">
					{this.state.data.map(elemento => (
						<li className="list-group-item" key={elemento.id}>
							{elemento.description}
							<button
								type="button"
								className="close"
								aria-label="Close"
								onClick={() => this.eliminar(elemento)}>
								<span aria-hidden="true">&times;</span>
							</button>
						</li>
					))}
				</ul>
			</>
		);
	}
}
