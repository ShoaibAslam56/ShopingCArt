import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTopButton from './Components/scrollbtn';
import ShopContextProvider from './Shop-context/ShopContext';
import Loading from './Loader/Loading';

// const Navbar = lazy(() => import('./Components/Navbar'));
const Navbar = lazy(()=> new Promise (resolve => {
  setTimeout(()=> resolve(import('./Components/Navbar')),1500)
}))
const Shop = lazy(() => import('./Pages/Shop/Shop'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Fotor = lazy(() => import('./Components/Fotor'));
const MyStore = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./Pages/Shop/MyStore')), 1000);
}));

function AppContent() {
  const location = useLocation();

  const showFooter = location.pathname !== '/cart' && location.pathname !== '/mystore';

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mystore" element={<MyStore />} />
      </Routes>
      {showFooter && <Fotor />}
    </Suspense>
  );
}

export default function App() {
  return (
    <ShopContextProvider>
      <Router>
        <AppContent />
      </Router>
    </ShopContextProvider>
  );
}
