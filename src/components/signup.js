
function Signup ({handleSubmit, handleChange, user}) { 
    let {fullName, lastName, email, tel, password, confirmPassword} = user
    return (
       <form onSubmit={handleSubmit}>
           <label htmlFor="fullName">Name</label>
           <input type="text" name="fullName" value={fullName} required onChange={handleChange} />
           <br></br>
           <br></br>
           <label htmlFor="lastName">Lastname</label>
           <input type="text" name="lastName" value={lastName} required onChange={handleChange}/>
           <br></br>
           <br></br>
           <label htmlFor="email">Email</label>
           <input type="email" name="email" value={email} required onChange={(event) => {
              
               handleChange(event)
               }} />
           <br></br>
           <br></br>
           <label htmlFor="tel">Tel</label>
           <input type="tel" name="tel" value={tel} onChange={handleChange} />
           <br></br>
           <br></br>
           <label htmlFor="password">Password</label>
           <input type="password" name="password" value={password} required onChange={handleChange} />
           <br></br>
           <br></br>
           <label htmlFor="confirmPassword">Confirm Password</label>
           <input type="password" name="confirmPassword" value={confirmPassword} required onChange={handleChange} />
           <br></br>
           <br></br>
           <button type="submit">Submit</button>


       </form>
    )
}
export default Signup