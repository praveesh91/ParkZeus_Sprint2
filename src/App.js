import React from 'react';
import ParkingManagement from './Pages/SolutionAdmin/ParkingManagement';
// import Login from './Pages/Login/Login'
import './App.css';


function App() {
  
  return (
    <>
        {/* <Router>
            <div>
                <Redirect exact from="/" to="login" />
                <PrivateRoute exact path="/" component={ParkingManagement} />
                <Route path="/login" component={LoginPage} />
            </div>
        </Router> */}
      <ParkingManagement />
      {/* <Login /> */}
    </>
  );
}

export default App;
