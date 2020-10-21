import React from 'react'
//import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import CustomMenu from '@/components/CustomMenu'

const { Sider } = Layout

const AppAside = props => {
    let { menu } = props
    return (
        <Sider className='aside'>
            <div className='logo'>
                <a rel='noopener noreferrer' href='https://github.com/FLQ77' target='_blank'>
                    <GithubOutlined style={{ fontSize:'3.8rem', color: '#fff'}} />
                </a>
            </div>
            <CustomMenu menu={menu} ></CustomMenu>
        </Sider>
    )
}

export default AppAside