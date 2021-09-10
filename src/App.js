import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Terms from './components/terms';
import Success from './components/success';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState({
    fullName: '',
    lastName: '',
    email: '',
    tel: '',
    password: '',
    confirmPassword: '',
    terms: false,
    statusSuccess: false
    
  })
  console.log('user :',user)
  let history = useHistory()

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log("submit", user)
      if(user.password !== user.confirmPassword){
          alert("Password not matched")
          return false
      }

      history.push('/terms')
      
  }

  const handleChange = (event) => {
      console.log( event.target.value)
      if (event.target.name==='terms') {
        setUser({...user,[event.target.name]:!user.terms})
      } else {
        setUser({...user,[event.target.name]:event.target.value}) 
      }
  }

  const handleSignup = (event) => {
    event.preventDefault()
    console.log(event.target)
    if(!user.terms){
      alert("Please accept terms and condition")
      return false
    }
    setUser({...user, statusSuccess: true})
    history.push('/success')
  }

  const PrivateRoute = ({component: Component, ...rest}) => {
   
      return (
        <Route
          {...rest}
          render= {(props) => {
            console.log('props : ', props)
            return (
              user.statusSuccess ? <Component {...props} /> : <Redirect to={{pathname:"/signup"}}/>
            )
          }}
        />
      )
  
  }



  return (
    <div className="App"> 
      <Header  />

      <div className="container">
        <Switch>
        
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        
          <Route exact path="/signup">
            <Signup handleChange={handleChange} handleSubmit={handleSubmit} user={user}/>
          </Route>

          <Route exact path="/terms">
            <Terms user={user} handleChange={handleChange} handleSignup={handleSignup} />
          </Route>

          <PrivateRoute path="/success" component={<Success tar="123" />} />

        </Switch> 
      </div>
      
      <Footer />  
    </div>
  );
}

export default App;
