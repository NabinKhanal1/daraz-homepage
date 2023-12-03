import React from 'react'

const Login = () => {
  return (
    <>
     <div className="conatiner my-5">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5 shadow p-3">
                <form>
                   
                    <div className="mb-2">
                        <label htmlFor="name">Email</label>
                        <input type="email" name='email' id='email' className='form-control'/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="name">Password</label>
                        <input type="password" name='password' id='password' className='form-control'/>
                    </div>
                    <div className="mb-2">
                        <button className='btn btn-primary'>Login</button>
                        <button className='btn btn-warning'>Forget password</button>
                        

                    </div>


                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Login