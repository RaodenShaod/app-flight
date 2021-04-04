import React from 'react';
//  import InicioSesion from './FormularioInicioSesion';
import '../styles/Home.css';
/*
 * evento onChange es el error que remarca en la consola tenemos que agregar un por
 * estado por defecto del formulario en si y también agregar a cada "input" el evento
 * onChange (pendiente)
 */

class PaginaDeInicio extends React.Component {
  constructor(props) {
    super(props);
    this.idayVueltaRadioButton = this.idayVueltaRadioButton.bind(this);
    this.idaRadioButton = this.idaRadioButton.bind(this);
    this.state = {
      FormularioDeVuelos: (
        <div>
          <h2>Vuelos Online</h2>
          <h3>Encuentra tus pasajes Aqui</h3>

          <form action='' method=''>
            <label htmlFor='ida'>Ida</label>
            <input
              type='radio'
              name='viaje'
              id='ida'
              value='Ida'
              checked></input>

            <label htmlFor='idaYVuelta'>Ida y vuelta</label>
            <input
              type='radio'
              name='viaje'
              id='idaYVuelta'
              value='IdaYVuelta'
              onClick={this.idayVueltaRadioButton}></input>

            <br></br>

            <label htmlFor='salida'>Salida:</label>
            <input type='text' placeholder='Ciudad Origen' id='salida'></input>
            <input type='text' placeholder='Ciudad Destino' id='salida'></input>
            <input type='date' placeholder='Fecha' id='salida'></input>

            <input type='submit'></input>
          </form>
        </div>
      )
    };
  }

  idayVueltaRadioButton() {
    this.setState({
      FormularioDeVuelos: (
        <div>
          {' '}
          <h2>Vuelos Online</h2>
          <h3>Encuentra tus pasajes Aqui</h3>
          <form action='' method=''>
            <label htmlFor='ida'>Ida</label>
            <input
              type='radio'
              name='viaje'
              id='ida'
              value='Ida'
              onClick={this.idaRadioButton}></input>

            <label htmlFor='idaYVuelta'>Ida y vuelta</label>
            <input
              type='radio'
              name='viaje'
              id='idaYVuelta'
              value='IdaYVuelta'
              checked></input>

            <br></br>

            <label htmlFor='salida'>Salida:</label>
            <input type='text' placeholder='Ciudad Origen' id='salida'></input>
            <input type='text' placeholder='Ciudad Destino' id='salida'></input>
            <input type='date' placeholder='Fecha' id='salida'></input>

            <br></br>

            <label htmlFor='regreso'>Regreso:</label>
            <input type='text' placeholder='Ciudad Origen' id='regreso'></input>
            <input
              type='text'
              placeholder='Ciudad Destino'
              id='regreso'></input>
            <input type='date' placeholder='Fecha' id='regreso'></input>

            <input type='submit'></input>
          </form>
        </div>
      )
    });
  }

  idaRadioButton() {
    this.setState({
      FormularioDeVuelos: (
        <div>
          <h2>Vuelos Online</h2>
          <h3>Encuentra tus pasajes Aqui</h3>
          <form action='' method=''>
            <label htmlFor='ida'>Ida</label>
            <input
              type='radio'
              name='viaje'
              id='ida'
              value='Ida'
              checked></input>

            <label htmlFor='idaYVuelta'>Ida y vuelta</label>
            <input
              type='radio'
              name='viaje'
              id='idaYVuelta'
              value='IdaYVuelta'
              onClick={this.idayVueltaRadioButton}></input>

            <br></br>

            <label htmlFor='salida'>Salida:</label>
            <input type='text' placeholder='Ciudad Origen' id='salida'></input>
            <input type='text' placeholder='Ciudad Destino' id='salida'></input>
            <input type='date' placeholder='Fecha' id='salida'></input>

            <input type='submit'></input>
          </form>
        </div>
      )
    });
  }
  render() {
    return <div>{this.state.FormularioDeVuelos}</div>;
  }
}

export default PaginaDeInicio;
