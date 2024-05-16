import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'


import '../components/shared/float-div/floatdiv-style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

const ThemeProvider = React.lazy(() => import('../contexts/theme.context'));
const Login = lazy(() => import('./../views/auth/login/login'));
const SignUp = lazy(() => import('./../views/auth/sign-up/signup'));
const Home = lazy(() => import('./../views/home/home'));
const Header = lazy(() => import('../components/shared/header/header'));
const Footer = lazy(() => import('./../components/shared/footer/footer'));
const Library = lazy(() => import('./../views/library/library'));
const Payment = lazy(() => import('./../views/payment/payment'));
const Quiz = lazy(() => import('./../views/quiz/quiz'));
const Profile = lazy(()=>import('../views/profile/profile'));
const Overview = lazy(()=>import('../components/profile/overview/overview'));
const CourseDetails = lazy(() => import('../views/course-details/course-details'));
const ChooseSubscriptionFees = lazy(() => import('./../views/choose-subscription-fees/choose-subscription-fees'));



function App() {

  const handleShowSidebar = () => {

  }
  return (
    <div className="app">

      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<div>loading</div>}>
            <Header handleShowSidebar={handleShowSidebar} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='choose-subscription' element={<ChooseSubscriptionFees />} />
              <Route path='/courses' element={<CourseDetails />}>
                <Route path='/courses/:id' element={<CourseDetails />} >
                  <Route path='/courses/:id/quiz/:id' element={<Quiz />} />
                </Route>
              </Route>
              <Route path='library' element={<Library />} />
              <Route path='payment' element={<Payment />} />
              <Route  path='profile' element={<Profile/>}>
                <Route path='overview' element={<Overview/>}/>
              </Route>
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </div>

  );
}

export default App;
