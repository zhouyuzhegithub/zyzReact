import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/Header/index.js';
import Login from './components/Login/index.js';
import List from './containers/List/index.js';
import Detail from './containers/Detail/index.js';
import Vip from './containers/Vip/index.js';
import 'antd/dist/antd.css';
import './style.css';


const { Header, Footer, Content } = Layout;

class App extends Component {

	render() {
		return (
      <BrowserRouter>
				<Layout style={{ minWidth: 1300, height: '100%'}}>
      				<Header className="header">
      					<AppHeader />
      				</Header>
      				<Content className="content">
                <Login />          
                <Switch>
                <Route path='/vip' component={Vip} />
                <Route path='/detail/:id' component={Detail} />
                <Route path='/:id?' component={List}/>
                </Switch>              
              </Content>
      				<Footer className="footer">@copyright zyz 2020</Footer>
    			</Layout>
        </BrowserRouter>
			)
	}
}

ReactDom.render(<App />, document.getElementById('root'))