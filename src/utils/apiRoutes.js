const BaseUrl = 'http://localhost:4000'
const  LoginRoute = `${BaseUrl}/api/auth/login`
const  SignupRoute = `${BaseUrl}/api/auth/signup`
const LoginFacebookRoute = `${BaseUrl}/api/auth/facebook`
const LoginGoogleRoute = `${BaseUrl}/api/auth/google`
const GetCoursesRoute = `${BaseUrl}/api/courses`
const GetPurchasedCourses = `${BaseUrl}/api/users/:id/purchased-courses`
const GetCategories = `${BaseUrl}/api/categories`
export { 
    BaseUrl, 
    LoginRoute, 
    SignupRoute, 
    LoginFacebookRoute,
    LoginGoogleRoute ,
    GetCoursesRoute,
    GetPurchasedCourses,
    GetCategories
}