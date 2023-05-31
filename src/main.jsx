import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: theme => [
            {
              body: {
                background: '#F7F7F8',
              },
            },
          ],
          fontFamily: 'Inter',
          colorScheme: 'light',
          white: '#ffffff',
          black: '#232134',
          colors: {
            blue: ['#deebff', '#deebff', '#c9e0ff', '#b7d6ff', '#92c1ff', '#5e96fc', '#3b7cd3'],
            gray: ['#f5f5f6', '#eaebed', '#d5d6dc', '#ACADB9', '#ACADB9', '#7b7c88', '#232134'],
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
            ml: '12px',
          },
          fontSizes: {
            xs: '0.875rem',
            sm: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
          },
          components: {
            Header: {
              styles: theme => ({
                root: {
                  borderBottom: 'none',
                  [theme.fn.smallerThan('ml')]: {
                    backgroundColor: 'red !important',
                  },
                },
              }),
            },
            Input: {
              styles: theme => ({
                input: {
                  border: `1px solid ${theme.colors.gray[2]}`,
                  placeholderColor: theme.colors.gray[3],
                  fontSize: theme.fontSizes.xs,
                },
              }),
            },
            NumberInput: {
              styles: theme => ({
                rightSection: {
                  width: '19px',
                },
                control: {
                  width: '12px',
                  height: '5px',
                  stroke: theme.colors.gray[3],
                  strokeWidth: '1',
                  border: 'none',
                  '&:not(:disabled):hover': {
                    backgroundColor: 'transparent',
                  },
                },
                controlUp: {
                  paddingTop: '7px',
                },
                controlDown: {
                  paddingBottom: '7px',
                },
              }),
            },
            TextInput: {
              styles: theme => ({
                input: {
                  borderColor: theme.colors.gray[1],
                  height: '3rem',
                },
              }),
            },
            Button: {
              styles: (theme, { variant }) => ({
                root: {
                  fontSize: theme.fontSizes.xs,
                  fontWeight: '500',
                  color: variant === 'light' ? theme.colors.blue[6] : theme.white,
                  '&:hover': {
                    backgroundColor:
                      variant === 'light' ? theme.colors.blue[3] : theme.colors.blue[4],
                  },
                  '&:active': {
                    backgroundColor: theme.colors.blue[6],
                  },
                },
              }),
            },
            Pagination: {
              styles: {
                dots: {
                  display: 'none',
                },
              },
            },
            Select: {
              styles: theme => ({
                item: {
                  fontSize: theme.fontSizes.xs,
                  '&:hover': {
                    backgroundColor: theme.colors.blue[0],
                  },
                  '&:selected': {
                    backgroundColor: theme.colors.blue[5],
                  },
                },
              }),
            },
            Anchor: {
              defaultProps: {
                fz: 'sm',
              },
              styles: {
                root: {
                  '&:hover': {
                    textDecoration: 'none',
                  },
                },
              },
            },
            Card: {
              styles: theme => ({
                root: {
                  maxWidth: '773px',
                  backgroundColor: theme.colors.white,
                  padding: '24px',
                  border: `1px solid ${theme.colors.gray[1]}`,
                },
              }),
            },
          },
          headings: {
            fontFamily: 'Poppins, sans-serif',
            sizes: {
              h1: {
                fontSize: '1.5rem',
                fontWeight: '600',
                letterSpacing: '-0.02em',
                lineHeight: '36px',
              },
            },
          },
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
