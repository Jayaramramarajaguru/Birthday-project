// import {
//  BrowserRouter,
//  Routes,
//  Route
// } from "react-router-dom"



// import Welcome from "./pages/Welcome"
// import Login from "./pages/Login"
// import Countdown from "./pages/Countdown"
// import Story from "./pages/Story"
// import Gallery from "./pages/Gallery"
// import Reasons from "./pages/Reason"
// import Music from "./pages/Music"
// import Cake from "./pages/Cake"
// import Gift from "./pages/Gift"
// import Letter from "./pages/Letters"
// import FinalSurprise from "./pages/FinalSurprise"
// import FinalMessage from "./pages/Finalmessage"

// export default function App() {
//  return (
//   <BrowserRouter>
//    <Routes>

//     <Route path="/" element={<Welcome />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/countdown" element={<Countdown/>} />
//     <Route path="/story" element={<Story />} />
//     <Route path="/gallery" element={<Gallery />} />
//     <Route path="/reasons" element={<Reasons />} />
//     <Route path="/music" element={<Music />} />
//     <Route path="/cake" element={<Cake/>} />
//     <Route path="/gift" element={<Gift />} />
    
//     <Route path="/letter" element={<Letter />} />
//     <Route path="/final" element={<FinalSurprise />} />
//     <Route path="/finalmessage" element={<FinalMessage />} />


//    </Routes>
//   </BrowserRouter>
//  )
// }


import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom"



import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Countdown from "./pages/Countdown"
import Story from "./pages/Story"
import Gallery from "./pages/Gallery"
import Reasons from "./pages/Reason"
import Music from "./pages/Music"
import Cake from "./pages/Cake"
import Gift from "./pages/Gift"
import Letter from "./pages/Letters"
import FinalSurprise from "./pages/FinalSurprise"
import LockGate from "./components/LockGate"
import FinalMessage from "./pages/Finalmessage"

export default function App() {
 return (
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<Welcome />} />
    <Route path="/login" element={<Login />} />
    <Route path="/countdown" element={<Countdown/>} />

    <Route path="/story" element={<LockGate><Story /></LockGate>} />
    <Route path="/gallery" element={<LockGate><Gallery /></LockGate>} />
    <Route path="/reasons" element={<LockGate><Reasons /></LockGate>} />
    <Route path="/music" element={<LockGate><Music /></LockGate>} />
    <Route path="/cake" element={<LockGate><Cake/></LockGate>} />
    <Route path="/gift" element={<LockGate><Gift /></LockGate>} />
    
    <Route path="/letter" element={<LockGate><Letter /></LockGate>} />
    <Route path="/final" element={<LockGate><FinalSurprise /></LockGate>} />
    <Route path="/finalmessage" element={<LockGate><FinalMessage /></LockGate>} />


   </Routes>
  </BrowserRouter>
 )
}
