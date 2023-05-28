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
        withGlobalStyles
        theme={{
          globalStyles: (theme) => ({
            body: {
              background: '#F7F7F8',
            }
          }),
          colorScheme: 'light',
          white: '#ffffff',
          black: '#232134',
          colors: {
            blue: ['#deebff', '#deebff', '#c9e0ff', '#b7d6ff', '#92c1ff', '#5e96fc', '#3b7cd3'],
            // white: [' #ffffff'],
            gray: ['#f5f5f6', '#eaebed', '#d5d6dc', '#ACADB9', '#ACADB9', '#7b7c88', '#232134'],
            // black: ['#232134'],
          },
          primaryShade: {
            light: 5,
          },
          primaryColor: 'blue',
          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },
          radius: {
            sm: '8px',
          },
          fontSizes: {
            xs: '0.875rem',
            sm: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
          },
          components: {
            // Text: {
            //   defaultProps: (theme) => ({
            //     color: theme.colors.black,
            //   })
            // },
            Header: {
              styles: {
                root: { borderBottom: 'none' },
              },
            },
            // Body: {
            //   styles: {
            //     root: {  background: '#F7F7F8' },
            //   },
            // },
            Card: {
              styles: (theme) => ({
                root: { maxWidth: '773px', backgroundColor: theme.colors.white, padding: '24px !important', border: '1px solid gray-1' },
              }),
            }
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
       
       
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
