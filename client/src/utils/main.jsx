import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LogIn from '../components/LogIn.jsx';
import SignUp from '../components/SignUp.jsx';
import Home from '../components/Home.jsx'
import Map from '../components/Map.jsx'
import Timber from '../components/Timber.jsx'
import MineralRights from '../components/MineralRights.jsx'
import Loblolly from '../components/Loblolly.jsx'
import Wildlife from '../components/Wildlife.jsx'

const router = createBrowserRouter ([
    { path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'map',
                element: <Map />
            },
            {
                path: 'timber',
                element: <Timber />
            },
            {
                path: 'mineralrights',
                element: <MineralRights />
            },
            {
                path: 'loblolly',
                element: <Loblolly />
            },
            {
                path: 'wildlife',
                element: <Wildlife />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>,
)
