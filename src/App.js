import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Started from './pages/Started/Started';
import PanoramaViewer from './PanoramaViewer';
import Denah from './pages/Denah/Denah';

const App = () => {
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Started />} />
        <Route path="/panorama" element={<PanoramaViewer />} />
        <Route path="/denah" element={<Denah />} />
      </Routes>
    </Router>
  );
};

export default App;