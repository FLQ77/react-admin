import React from 'react'
//import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const { Sider } = Layout

const AppAside = props => {
    //let { menuToggle, menu } = props
    return (
        <Sider>
            <div>
                <a rel='noopener noreferrer' href='https://github.com/ltadpoles' target='_blank'>
                    <GithubOutlined style={{ fontSize:'3.8rem', color: '#fff'}} />
                </a>
            </div>
        </Sider>
    )
}

export default AppAside