import React, { useState, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'
import Modal from 'react-bootstrap/Modal'
import { usePostFetch } from '../hooks/usePostFetch'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Alumnos = (props) => {

  const {data, isLoading, error} = useFetch('https://backcolegiosebas.azurewebsites.net/Colegio/api/Alumnos/ObtenerAlumnos');
  const createAlumnoRequest = usePostFetch('https://backcolegiosebas.azurewebsites.net/Colegio/api/Alumnos/AgregarAlumnos');

  const [createModal, setCreateModal] = useState(false);
  const tableRef = useRef(null);

  const handleCreateShow = () => setCreateModal(true);
  const handleCreateHide = () => setCreateModal(false);

  const showSwal = (message) => {
    withReactContent(Swal).fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 2500
    })
  }

  return (
    <div className='container'>
        <div className='dashboard-options d-flex justify-content-end'>
          <button className='btn btn-primary mx-2' onClick={handleCreateShow}>Agregar Alumno</button>
        </div>
        <hr />

        {error && <h2 className='text-center'>Error:{error}</h2>}
        {isLoading ? (<h2 className='text-center'>Loading...</h2>):(

      <table className='table table-striped' ref={tableRef}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha Nacimiento</th>
            <th>ID Carrera</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((alumno) => (
            <tr key={alumno.idAlumno}>
              <th>{alumno.idAlumno}</th>
              <th>{alumno.nombre}</th>
              <th>{alumno.apellido}</th>
              <th>{alumno.F_Nacimiento}</th>
              <th>{alumno.idCarrera}</th>
              <th>{alumno.telefono}</th>
            </tr>
          ))}
        </tbody>
      </table>
      )}

      {/* Modal para crear usuarios */}
      <Modal show={createModal} onHide={handleCreateHide}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form id='createUserForm' onSubmit={(event) => {
            event.preventDefault();

            // opcion con JSON
            let payload = {}
            payload.nombre = document.getElementById('createNombre').value;
            payload.apellido = document.getElementById('createApellido').value;
            payload.fnacimiento = document.getElementById('createFnacimiento').value;
            payload.idcarrera = document.getElementById('createIDcarrera').value;
            payload.telefono = document.getElementById('createTelefono').value;

            createAlumnoRequest.executePost(payload);

            handleCreateHide();
            showSwal('Usuario guardado exitosamente')

          }}>
            <div className='row mb-3'>
              <div className='col-sm-12 col-md-6'>
                <label>Nombre</label>
                <input id='createNombre' type="text" className='form-control' name='nombre' required/>
              </div>

              <div className='col-sm-12 col-md-6'>
                <label>Apellido</label>
                <input id='createApellido' type="text" className='form-control' name='apellido' required/>
              </div>

              <div className='col-sm-12 col-md-6'>
                <label>Fecha de Nacimiento</label>
                <input id='createFnacimiento' type="text" className='form-control' name='fnacimiento' placeholder="yyyy-mm-dd" required/>
              </div>

              <div className='col-sm-12 col-md-6'>
                <label>ID Carrera</label>
                <input id='createIDcarrera' type="text" className='form-control' name='idcarrera' required/>
              </div>

              <div className='col-sm-12 col-md-6'>
                <label>Telefono</label>
                <input id='createTelefono' type="text" className='form-control' name='telefono' required/>
              </div>

              </div>

              <div className='d-flex justify-content-end'>
                <button type='button' className='btn btn-danger mx-2' onClick={handleCreateHide}>Cancelar</button>
                <button type='submit' className='btn btn-primary'>Guardar</button>
              </div>         
            
          </form>
        </Modal.Body>
        
      </Modal>

    </div>
  )
}

export default Alumnos