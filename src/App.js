
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { TaskManager } from "./components/TaskManager/TaskManager";

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;











// import Dashboard from "./components/Dashboard/Dashboard";
// import {Navbar} from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Dashboard />
//     </div>
//   );
// }

// export default App;
