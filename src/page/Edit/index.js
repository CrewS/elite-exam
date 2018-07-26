import React, { Component } from 'react';
import { Icon } from 'antd';
import { Input,Button,Table,Breadcrumb } from 'antd';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './index.scss';
import $ from "jquery";
const { TextArea } = Input;

class EditContainer extends React.Component {
  state={
    paperName:"这是试卷名称",
    paperIns:"这是试卷说明",
    paper:[],
    paperpass:60
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  //修改试卷名称
  onChangePaperName=(e)=>{
    this.setState({
      paperName:e.target.value
    })
  }
  //修改试卷说明
  onChangePaperIns=(e)=>{
    this.setState({
      paperIns:e.target.value
    })
  }

  render() {
    const inputStyle={
      width:'468px'
    }


    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }, {
      title: 'Address',
      dataIndex: 'address',
      render: (text, record, index) => (
        <span></span>
      )
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    }];







    return (
      <div style={{width:'100%',display:'flex',display:'-webkit-flex'}}>
        <Sidebar/>
        <div className="text-right-left">

          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon type="folder-open" style={{marginRight: '5px'}} />
              <span>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="folder-open" style={{marginRight: '5px'}} />
              <span>试卷管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="edit" style={{marginRight: '5px'}} />
              <span>编辑试卷</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className="edit-paper">编辑试卷</div>

          <div className="edit-box">
            <div className="label-box">
              <div>试卷说明</div>
              <div>
                <Input placeholder="请输入1-50个字符的名称"
                onChange={this.onChangePaperName}
                value={this.state.paperName}
                style={inputStyle}/>
              </div>
            </div>
            <div className="label-box">
              <div style={{lineHeight:'14px'}}>试卷名称*</div>
              <div>
                <TextArea placeholder="请输入试卷说明"
                autosize={{ minRows: 2, maxRows: 6 }}
                onChange={this.onChangePaperIns}
                style={inputStyle}/>
              </div>
            </div>
            <div className="label-box">
              <div style={{lineHeight:'14px'}}>试题列表</div>
              <div>


                <Table
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                  title={()=><div>
                              <Button type="primary">添加试题</Button>
                              <Button type="primary" style={{marginLeft:'10px'}}>批量设置分值</Button>
                            </div>
                  }
                />

                <div>
                  <div className="total">
                    <div className="total-block total-top">
                        <span className="first-span">题型</span>
                        <span>单选题</span>
                        <span>多选题</span>
                        <span>判断题</span>
                        <span>填空题</span>
                    </div>
                    <div className="total-block">
                        <span className="first-span">已选数量</span>
                        <span className="number">25</span>
                        <span className="number">30</span>
                        <span className="number">40</span>
                        <span className="number">44</span>
                    </div>
                    <div className="pass-per">
                      <div>
                        <span>总题型：{this.state.paper.length}</span>
                        <span>总分：{this.state.paper.length}</span>
                        <span>及格线*：
                        <span style={{float: 'right'}}>%</span>
                          <div className="inputBox">
                            <div className="inputLeft">
                              <Input value={this.state.paperpass} />
                            </div>
                            <div className="inputRight">
                              <div>1</div>
                              <div>2</div>
                            </div>
                          </div>

                        </span>
                      </div>
                    </div>

                  </div>
                </div>




              </div>






            </div>
          </div>

        </div>
      </div>
    );
  }



}


export default class Edit extends React.Component {
  state = {
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    showShadow: false,
  }

  componentDidMount(){
    const that = this;

    $(window).resize(() => {
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      that.setState({ height })
    })

    $(document.body).scroll(() => {
      this.setState({
        showShadow: ($(window).height() !== $(document).height()) && $(document.body).scrollTop() > 0
      })
    })
  }

  render() {
    const containerHeight = { minHeight: this.state.height - 180 + 'px'}
    return (
      <div>
        <Header showShadow={this.state.showShadow} />
        <div className="container" style={containerHeight}>
          <EditContainer />
        </div>
        <Footer />
      </div>
    );
  }
}