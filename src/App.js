import './App.css';
import Header from './components/Header';
import Store from './utils/Store';
import { Provider } from 'react-redux';
import Body from './components/Body';
import WatchPage from './components/WatchPage';
import Middle from './components/Middle';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/MainContainer';

function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[{
        path:"/",
      element:<MainContainer/>
      },
      {
        path:"watch",
      element:<WatchPage/>
      }
    ]
    }
  ])
  return (
    <Provider store={Store}>
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
      {/* <Body/> */}
    </div>
    </Provider>
  );
}

export default App;
