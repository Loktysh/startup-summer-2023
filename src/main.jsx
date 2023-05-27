import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './styles/normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        
        theme={{
          colorScheme: 'light',         
          colors: {
            blue: ['#deebff', '#deebff', '#c9e0ff', '#b7d6ff', '#92c1ff', '#5e96fc', '#3b7cd3'],
            white: [' #ffffff'],
            gray: ['#f5f5f6', '#eaebed', '#d5d6dc', '#ACADB9', '#ACADB9', '#7b7c88', '#232134'],
            black: ['#232134'],
          },
          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },
          radius: {
            sm: '8px',
          },

          components: {
            Header: {
              styles: {
                root: { borderBottom: 'none' },
              },
            },
            Body: {
              background: '#F7F7F8 !important',
            },
          },
          input: {
            borderColor: 'gray-2',
            borderWidth: '1px',
          },
          // headings: {
          //   fontFamily: 'Roboto, sans-serif',
          //   sizes: {
          //     h1: { fontSize: '2rem' },
          //   },
          // },
        }}
        withGlobalStyles
       
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
