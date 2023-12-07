import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import FormToList from './components/form/Form';
import ListOfForm from './components/list/content/List';
import { ProviderDados } from './ContextDados';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <ProviderDados>
      <Router>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/form" element={<FormToList />} />
          <Route path="/list" element={<ListOfForm />} />
        </Routes>
      </Router>
    </ProviderDados>
  );
}

export default App;
