import {Outlet} from 'react-router-dom';
import '../utils/App.css'
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';