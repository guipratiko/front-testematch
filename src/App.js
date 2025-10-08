import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/Layout';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Plans from './pages/Plans';
import Upload from './pages/Upload';
import Analysis from './pages/Analysis';
import History from './pages/History';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Reviews from './pages/Reviews';
import HelpCenter from './pages/HelpCenter';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import SetupPassword from './pages/SetupPassword';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="plans" element={<Plans />} />
          <Route path="features" element={<Features />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="setup-password/:userId" element={<SetupPassword />} />
          
          {/* Análise pública (compartilhamento) */}
          <Route path="analysis/share/:token" element={<Analysis />} />
          
          {/* Rotas protegidas */}
          <Route path="upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
          <Route path="analysis/:id" element={<ProtectedRoute><Analysis /></ProtectedRoute>} />
          <Route path="history" element={<ProtectedRoute><History /></ProtectedRoute>} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          
          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
