import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Diaries from './pages/Diaries'
import App from './App'
import NotFound from './pages/NotFound'
import DiaryDetail from './pages/DiaryDetail'
import './index.css'
import NewDiary from './pages/NewDiary'
import DairyEdit from './pages/DairyEdit'
import UserProfile from './pages/UserProfile'
import UserEdit from './pages/UserEdit'



const isAuthenticated = true;

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: '/diaries', element: isAuthenticated ? <Diaries /> : <Login /> },
      { path: '/diary/:diaryId', element: <DiaryDetail /> },
      { path: '/diary/new', element: <NewDiary /> },
      { path: '/diary/:diaryId/edit', element: <DairyEdit />},
      { path: '/notfound', element: <NotFound /> },
      { path: '/user', element: <UserProfile />},
      { path: '/user/edit', element: <UserEdit />}
    ]}
   ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>,
)

