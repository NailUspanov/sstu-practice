import pageProfile from "../reducers/pageProfileReducer";
import pageMessages from "../reducers/pageMessagesReducer";

let store = {
   _state: {
      pageMessages: {
         dialogItemsData: [
            { name: 'Nail', id: 1 },
            { name: 'Sophya', id: 2 },
            { name: 'Max', id: 3 },
            { name: 'Anton', id: 4 }
         ],
         messagesData: [
            {text: 'Hello!', id: 999},
         ],
         messageValue: 'q',
      },
      pageProfile: {
         postsData: [
            { text: "jaja binks", id: 1 },
            { text: "funny stuff", id: 2 },
         ],
         postValue: "",
      },
   },
   renderPage () {},
   getState(){return this._state},
   subscribe(observer){
      this.renderPage = observer;
   },

   dispatch(action){
      this._state.pageProfile = pageProfile(this._state.pageProfile, action);
      this._state.pageMessages = pageMessages(this._state.pageMessages, action);

      this.renderPage();

   }
   
}

export default store;