import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'

import routes from '@/routes'

import AppHeader from './AppHeader.js'
import AppAside from './AppAside.js'
import AppFooter from './AppFooter.js'


const { Content } = Layout

class DefaultLayout extends Component {
    render() {
        let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''

        return (
            <Layout>
                <BackTop></BackTop>
                <AppAside></AppAside>
                <Layout>
                    <AppHeader></AppHeader>
                    <Content>
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