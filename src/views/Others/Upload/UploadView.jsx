import React from 'react'
import { Layout, Row, Col, Divider, Button, Upload, message, Modal } from 'antd'
import  { UploadOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

class UploadView extends React.Component {

    state = {
        previewVisible: false,
        previewImage: '',
        loading: false,
        previewTitle: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }
        ]
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    handlePreview = async file => {
        console.log(file)
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
          previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    }

    handleCancel = () => this.setState({ previewVisible: false })

    render() {
        const uploadButton = (
            <div>
                { this.state.loading ? (<LoadingOutlined />) :(<PlusOutlined />) }
                <div className='ant-upload-text'>Upload</div>
            </div>
        )
        const { previewVisible, previewImage, fileList, previewTitle } = this.state
        return (
            <Layout className='animate__animated animate__fadeIn'>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className="base-style">
                            <Divider orientation='left'>基础上传</Divider>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </div>
                        <div className="base-style">
                            <Divider orientation='left'>照片墙</Divider>
                            <div className='clearfix'>
                                <Upload
                                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    listType='picture-card'
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}>
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={this.handleCancel}>
                                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </div>
                    </Col>    
                </Row>  
            </Layout>
        )
    }
}


export default UploadView