import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@pages/App.tsx'
import './index.css'
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getTeams, addPlayers } from '@api/api.ts'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    loader: getTeams,
    action: addPlayers,
    children: [
      {
        path: 'player',
        element: 'player',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
