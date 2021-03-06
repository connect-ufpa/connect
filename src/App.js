import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { firebaseAuth } from './config/Config';
import { createStore, applyMiddleware } from 'redux';
import { UnauthorizedScreens, AuthorizedScreens } from './Router';
import SplashScreen from 'react-native-splash-screen';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  state = {
    signedIn: null,
    checkedSignIn: false
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentWillMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ signedIn: true, checkedSignIn: true })
      } else {
        this.setState({ signedIn: false, checkedSignIn: false })
      }
    });
  }
  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (signedIn === null) {
      return null;
    } else {
      return (
        <Provider store={store}>
          {(this.state.signedIn) ? <AuthorizedScreens /> : <UnauthorizedScreens />}
        </Provider>
      );
    }
  }
}
export default App;

