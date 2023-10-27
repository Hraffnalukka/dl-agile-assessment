import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AssessmentForm from './components/AssessmentApp';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import styled from '@mui/material/styles/styled';
import { ThemeProvider } from '@emotion/react';
import theme from './components/AssessmentTheme';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar>
          AGILE ASSESSMENT
          <img src="/logo.png" alt="logo" style={{ position: 'absolute', left: '10px', top: '10px', width: '75px', height: '45px' }} />
        </AppBar>
        <Offset />
        <BrowserRouter>
          <div className="App" style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <AssessmentForm />
          </div>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
