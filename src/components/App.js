import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Hoge from './ダウンロード.jpeg'

class App extends Component {
  //thisを関数内でも使えるように定義
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  //値が変更した際に呼ばれる関数
  change(e) {
    this.props.changeValue(e.target.value)
  }



  //値を入力したら，その文字がフォームの上に出力される
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/badlist'>BadList</Link></li>
            <li><Link to='/oklist'>OkList</Link></li>
          </ul>
          <ul>
            <li><Link to='/badinput'>BadInput</Link></li>
            <li><Link to='/okinput'>OkInput</Link></li>
          </ul>
          <ul>
            <li><Link to='/badbuttoninput'>BadButtonInput</Link></li>
            <li><Link to='/okbuttoninput'>OkButtonInput</Link></li>
          </ul>
          <ul>
            <li><Link to='/badvoice'>BadVoice</Link></li>
            <li><Link to='/okvoice'>OkVoice</Link></li>
          </ul>
          <Route exact path='/badlist' component={BadList} />
          <Route path='/oklist' component={OkList} />
          <Route exact path='/badinput' component={BadInput} />
          <Route path='/okinput' component={OkInput} />
          <Route exact path='/badbuttoninput' component={BadButtonInput} />
          <Route path='/okbuttoninput' component={OkButtonInput} />
          <Route exact path='/badvoice' component={BadVoice} />
          <Route path='/okvoice' component={OkVoice} />
        </div>
      </BrowserRouter>
    );
  }
}

const BadList = () => (
  <div className="App">
    <input style={{outline: 'none'}}/>
    <input style={{outline: 'none'}}/><br/>
    <input style={{outline: 'none'}}/>
    <input style={{outline: 'none'}}/>
  </div>
);
const OkList = () => (
  <div className="App">
    <input/>
    <input/><br/>
    <input/>
    <input/>
  </div>
);

const BadInput = () => (
  <div className="App">
    <input/>
    <div onClick={()=>{alert('done')}}>送信</div>
  </div>
);

const OkInput = () => (
  <div className="App">
    <input/>
    <div>
      <button onClick={()=>{alert('done')}}>送信</button>
    </div>
  </div>
);

const BadButtonInput = () => (
  <div className="App">
    <input/>
    <div>
      <img src={Hoge} onClick={()=>{alert('done')}}/>
    </div>
  </div>
);


const OkButtonInput = () => (
  <div className="App">
    <input/>
    <div>
      <button style={{border: 'none', padding: '0'}} onClick={()=>{alert('done')}}>
        <img src={Hoge}/>
      </button>
    </div>
  </div>
);


const BadVoice = () => (
  <div className="App">
    <img tabIndex="0" src={Hoge}/>
  </div>
);

const OkVoice = () => (
  <div className="App">
    <img tabIndex="0" src={Hoge} alt="5000兆円欲しい"/>
  </div>
);

export default App;
