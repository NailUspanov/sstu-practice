import React from 'react';
import store from './redux/store-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderPage = (state) => {

   ReactDOM.render(
      <React.StrictMode>
         <App store={store}
              pageMessages={state.pageMessages}
         postsData={state.pageProfile.postsData}
         postValue={state.pageProfile.postValue}
         dispatch = {store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
}
renderPage(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    renderPage(state);
});
