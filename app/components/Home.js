import React,{Component} from 'react'
import {createStore,bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//1. Action
function changeText(){
    return {
        type:'CHANGE_TEXT'
    }
}

function buttonClick(){
    return {
        type:'BUTTON_CLICK'
    }
}

//2. Reducer
const initialState = {
    text: 'Helllllo'
}
function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Helllllo'?'Stark':'Helllllo'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        default:
            return {
                text:'Helllllo'
            };
    }
}

//3. Store
export let store = createStore(myApp);

//4. Components
class Hello extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.changeText();
    }

    render() {
        return (
            <h1 onClick={this.handleClick}> {this.props.text} </h1>
        );
    }
}

class Change extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.buttonClick();
    }

    render(){
        return (
            <button onClick={this.handleClick}>change</button>
        )
    }

}

class App extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {actions,text} = this.props;//见后面的connect方法
        return (
            <div>
                <Hello actions={actions} text={text} />
                <Change actions={actions} />
            </div>
        )
    }
}

//5. 连接React组件和Redux
function mapStateToProps(state){//声明当state树变化时，哪些属性我们关心
    return {text: state.text}
}

function mapDispatchToProps(dispatch){//把store里的dispatch方法注入组件
    return {
        actions: bindActionCreators({
            changeText: changeText, 
            buttonClick: buttonClick
        },dispatch)
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App)//这里给了App两个props：text和actions



export default App;