import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Chatting from './Chatting'


export default function App () {
   return (
     <div>
       { <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}></Route>
        <Route  path='/signUp' element={<SignUp/>}></Route>
        <Route  path='/chatting' element={<Chatting/>}></Route>

     </Routes>
      </BrowserRouter>  }
        
      {/* <Login/>
      <SignUp/>
      <Chatting/> */}
      </div>
   )
}









// import './App.css';
// import Task from './Task'
// import Login from './Login'
// import SignUp from './SignUp'

// function App() {
//   return (
//     <>
//        <Task/>  
//          {/* <Login/>   */}
        
//     </>
//   );
// }
// export default App;

