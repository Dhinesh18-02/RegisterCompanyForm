import './App.css';
import StepperForm from './Components/StepperForm';
import CompanyTable from './Components/CompanyTable';
import { Provider } from 'react-redux';
import { store } from "./Store/Store.js";
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Box my={4}>
          <StepperForm />
          <Box my={4}>
            <CompanyTable />
          </Box>
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
