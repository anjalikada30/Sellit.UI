import './App.css';
import React, { Suspense } from "react";
import { Header, Loader } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LoginComponent = React.lazy(() => import('./pages/login/Login'));
const HomeComponent = React.lazy(() => import('./pages/home/Home'));
const AllBidsComponent = React.lazy(() => import('./pages/all-bids/AllBids'));
const CompletedBidsComponent = React.lazy(() => import('./pages/completed-bids/CompletedBids'));
const PendingBidsComponent = React.lazy(() => import('./pages/pending-bids/PendingBids'));
const CancelledBidsComponent = React.lazy(() => import('./pages/cancelled-bids/CancelledBids'));
const BookmarksComponent = React.lazy(() => import('./pages/bookmarks/Bookmarks.js'));
const ProductDetailsComponent = React.lazy(() => import('./pages/product-details/ProductDetails.js'));

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/all-bids' element={<AllBidsComponent />} />
          <Route path='/completed-bids' element={<CompletedBidsComponent />} />
          <Route path='/pending-bids' element={<PendingBidsComponent />} />
          <Route path='/cancelled-bids' element={<CancelledBidsComponent />} />
          <Route path='/bookmarks' element={<BookmarksComponent />} />
          <Route path='/product/:id' element={<ProductDetailsComponent />} />
        </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
}

export default App;
