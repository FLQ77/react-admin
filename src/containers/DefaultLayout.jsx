import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'

import routes from '@/routes'

import avatar from '@/assets/images/user.jpg'

import menu from './menu'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'

import '@/style/layout.scss'


const { Content } = Layout

class DefaultLayout extends Component {
    
    state = {
        avatar,
        menuToggle:false
    }

    menuClick = () =>{
        this.setState((state)=>{
            return { menuToggle: !state.menuToggle}
        })
    }

    render() {
        //let  { menuToggle,menuClick } = this.props

        let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''

        return (
            <Layout className='app'>
                <BackTop></BackTop>
                <AppAside menu={menu} menuToggle={this.state.menuToggle}></AppAside>
                <Layout style={{ marginLeft: this.state.menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
                    <AppHeader 
                        avatar={avatar} 
                        menuToggle={ this.state.menuToggle } 
                        menuClick={this.menuClick}
                        >    
                    </AppHeader>
                    <Content className='content'>
                        <Switch>
                            {routes.map(item => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={props =>
                                            !auth? (
                                                <item.component {...props} />
                                            ) : item.auth && item.auth.indexOf(auth) !== -1 ?(
                                                <item.component {...props} />
                                            ) : (
                                                <Redirect to='/404' {...props} />
                                            )
                                        }
                                    ></Route>
                                )
                            })}
                        </Switch>
                    </Content>
                    <AppFooter></AppFooter>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(DefaultLayout)