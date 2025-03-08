## Routing 3 ways :-
Copy the route code from createBrowserRouter  https://reactrouter.com/en/main/routers/create-browser-router:-
    appRouter.js
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        ]);
    export default appRouter;

 in index.js <RouterProvider router={appRouter} />
 comment <App/>


 1 way:- to get header and footer in every route:- 
        const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <><Head/><Body /><Footer/></>,
        },.....and so on
        ])

 2 way:- 
        index.js
            <App/>
        App.js
            <Head/>
                <ReactProvider router={appRouter}/>
            <Footer/>
3:-
## Outlet

* appRouter.js
    const appRouter= createBrowserRouter([
        {
        path:"/",
        element:<App/>,         //work as parent
        children:[
            {
                path:"about",
                element:<About/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"",
                element:<Body/>
            },
        ]
        }
    ])

 *  index.js
        comment <App/>

        <RouterProvideer router={appRouter}>

* App.js
    <Head/>
        <Outlet/>
    <Footer/>




## Flow if error occurs
 index.js is called first as we start project with npm start which make index.js run first
 then router provider is called where we hav our app element as parent which is not render yet
 so it shows error of calling element which is not rendered yet


 <!-- Protected Route -->
 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        element: <ProtectedRoute token={token} />, // Protect all nested routes
        children: [
            {
                path: '/profile',
                element: <Profile />,
            },
            // Add more protected routes here
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;


<!-- Browser router -->
<Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<ProtectedRoute token={token} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/emi-tracker" element={<EMITracker />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
    </Route>
</Routes>





<!-- ===================================== -->
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ token }) => {
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};





Using Outlet: The <Outlet> component acts as a placeholder for rendering child routes defined within the ProtectedLayout.