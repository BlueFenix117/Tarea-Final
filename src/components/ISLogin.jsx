import React from 'react'
import { useState } from 'react'
import Dashboard from './Dashboard';

const ISLogin = (props) => {

const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const [loginSuccess, setLoginSucces] = useState(false);
const url='https://backcolegiosebas.azurewebsites.net/Usuarios/Validar'

const handdlelogin = (event) => {
  // event.preventDefault();
          const data = {
            username: username,
            password: password
          };

          fetch(url,{
              method: 'POST',
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then(result =>{

            if (result.token){
              localStorage.setItem('token',result.token)
              setLoginSucces(true)
            }else{
              setLoginSucces(false)
            }
          })
          .catch((error) => console.log(error))
}

  return (
    <>{loginSuccess ? <Dashboard/> : 
    <div className='modalLogin'>
    <form id='LoginForm' className='loginForm d-block'>
    <h3 className='fw-normal mt-2 mx-2 pb-3'>Usuario: </h3>
    <input name='username' type='text' placeholder='User' className='form-control' onChange={(event) =>
    setUsername(event.target.value)
    }></input>
    <h3 className='fw-normal mt-2 mx-2 pb-3'>Contraseña: </h3>
    <input name='password' type='password' placeholder='Pass' className='form-control' onChange={(event) =>
    setPassword(event.target.value)
    }></input>
    <button type='button' className='btn btn-primary btn-block btnlog mt-3' onClick={handdlelogin}>Sign in</button>
    </form>
</div>}</>
  )
}

export default ISLogin