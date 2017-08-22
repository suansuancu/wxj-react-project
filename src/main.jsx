/* react */
import React from 'react';
import ReactDOM from 'react-dom';

/* sass */
require('./sass/main');
require('./sass/modules/main/main');

/**
 * @desc BasicExample.
 */
// import BasicExample from './router/BasicExample';
// ReactDOM.render(
//     <BasicExample />,
//     document.getElementById('app')
// );



/**
 * @desc ParamsExample.
 */
// import ParamsExample from './router/ParamsExample';
// ReactDOM.render(
//     <ParamsExample />,
//     document.getElementById('app')
// );



/**
 * @desc Redirects(Auth).
 */
// import Redirects from './router/Redirects';
// ReactDOM.render(
//     <Redirects />,
//     document.getElementById('app')
// );



/**
 * @desc CustomLinkExample.
 */
// import CustomLinkExample from './router/CustomLinkExample';
// ReactDOM.render(
//     <CustomLinkExample />,
//     document.getElementById('app')
// );



/**
 * @desc PreventingTransitionsExample.
 */
// import PreventingTransitionsExample from './router/PreventingTransitionsExample';
// ReactDOM.render(
//     <PreventingTransitionsExample />,
//     document.getElementById('app')
// );



/**
 * @desc NoMatchExample.
 */
// import NoMatchExample from './router/NoMatchExample';
// ReactDOM.render(
//     <NoMatchExample />,
//     document.getElementById('app')
// );



/**
 * @desc RecursiveExample.
 */
// import RecursiveExample from './router/RecursiveExample';
// ReactDOM.render(
//     <RecursiveExample />,
//     document.getElementById('app')
// );



/**
 * @desc SidebarExample.
 */
// import SidebarExample from './router/SidebarExample';
// ReactDOM.render(
//     <SidebarExample />,
//     document.getElementById('app')
// );



/**
 * @desc AnimationExample.
 */
// import AnimationExample from './router/AnimationExample';
// ReactDOM.render(
//     <AnimationExample />,
//     document.getElementById('app')
// );



/**
 * @desc AmbiguousExample.
 */
// import AmbiguousExample from './router/AmbiguousExample';
// ReactDOM.render(
//     <AmbiguousExample />,
//     document.getElementById('app')
// );



/**
 * @desc RouteConfigExample.
 */
// import RouteConfigExample from './router/RouteConfigExample';
// ReactDOM.render(
//     <RouteConfigExample />,
//     document.getElementById('app')
// );



/**
 * @desc ModalGallery.
 */
// import ModalGallery from './router/ModalGallery';
// ReactDOM.render(
//     <ModalGallery />,
//     document.getElementById('app')
// );



/**
 * @desc StaticRouterExample.
 */
// import StaticRouterExample from './router/StaticRouterExample';
// ReactDOM.render(
//     <StaticRouterExample />,
//     document.getElementById('app')
// );



/**
 *
 * @desc CodeSplitting.
 */
// import CodeSplitting from './router/CodeSplitting';
// ReactDOM.render(
//     <CodeSplitting />,
//     document.getElementById('app')
// );



/**
 * @desc react-redux example.
 */


class ListOfWords extends React.PureComponent {
    render(){
        return <div>{this.props.words.join(',')}</div>
    }
}
class WordAdder extends React.Component {
    constructor(props){
        super(props);
        this.state={
            words:['oukakim']
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){

        this.setState(prevState => ({
            words:prevState.words.concat(['test'])
        }));
    }

    render(){
        return (
            <div><button onClick={this.handleClick}>Add me</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}


class Hello extends React.Component {
    render(){
        return React.createElement('div', null, `Hello ${this.props.toWhat}`)
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.resizeProc = this.resizeProc.bind(this);
    }
    resize(){
        window.addEventListener('resize',this.resizeProc);
    }
    resizeProc(){
        let bodyWidthEle = document.querySelector('body');
        console.log(window.innerHeight);
    }

    render(){
        this.resize();
        return <div></div>
    }
}

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>Hello <x-search>{this.props.name}</x-search></div>
    }
}
let DataSource = {
    idInc: 6,
    commentData: [
        {id: 1, content: '这条评论很好1'},
        {id: 2, content: '这条评论很好2'},
        {id: 3, content: '这条评论很好3'},
        {id: 4, content: '这条评论很好4'},
        {id: 5, content: '这条评论很好5'},
        {id: 6, content: '这条评论很好6'},
    ],
    getComments() {
        return this.commentData;
    },
    getBlogPost(id) {
        return {time: '2017-07-20 12:00:00', text: '谁看这篇文章都说好!'};
    },
    addComment(data) {
        this.idInc += 1;
        this.commentData.push({id: this.idInc, content: data});
    },
    addChangeListener(handleFunc) {
        handleFunc();
    },
    removeChangeListener(handleFunc) {
        handleFunc();
    }
};

/* 评论列表 */
class CommentList extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // "DataSource" is some global data source
            comments: DataSource.getComments()
        };
    }

    componentDidMount() {
        // Subscribe to changes
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        // Clean up listener
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))
                }

                <AddComment addHandleFunc={this.handleChange} />
            </div>
        );
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.comment.id}-{this.props.comment.content}</div>;
    }
}

/* 添加评论 */
class AddComment extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.addHandleFunc = this.addHandleFunc.bind(this);
    }

    addHandleFunc() {
        DataSource.addComment(this.addInputEle.value);
        this.props.addHandleFunc();
        this.addInputEle.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入评论内容" ref={input => this.addInputEle = input} />
                <button type="button" onClick={this.addHandleFunc}>add</button>
            </div>
        );
    }
}

/* 博客文章详情 */
class BlogPost extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.handleChange = this.handleChange.bind(this);

        // state.
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        });
    }

    render() {
        return <TextBlock data={this.state.blogPost} />;
    }
}

class TextBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.data.time} - {this.props.data.text}</div>;
    }
}

/* */
const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);

/* This function takes a component... */
function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }
        componentDidMount() {
            // ... that takes care of the subscription...
            DataSource.addChangeListener(this.handleChange);
        }
        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }
        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }
        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}


/* jquery */
import $ from 'jquery';

/* sass */
// require('./sass/main');
import './sass/main';
// require('./sass/modules/main/main');
import './sass/modules/main/main';
class Chosen extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.$el = $(this.el);
        this.$el.on('change',this.handleChange);
    }
    componentWillUnmount(){
        this.$el.off('change',this.handleChange);
    }
    handleChange(e){
        this.props.onChange(e.target.value);
    }
    render(){
        return <div>
        <select className="chosen-select"  ref={el=>this.el=el}>
            {this.props.children}
        </select>
    </div>
    }
}

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		// state.
		this.state = {
			time:new Date
		}
	}
	handleClick(){
		console.log('1')
	}

	componentDidMount() {
		this.timeClear=setInterval(()=>{
			time:new Date
		},1000)
	}

	componentWillUnmount() {
		console.log('remove timer');
		clearInterval(this.timeClear)
	}

	render(){
		return <div>
			<span onClick={this.handleClick} ref={span=>{this.timeSpan= span;}}>{this.state.time.toLocaleTimeString()}</span>
		</div>
	}

}
class App extends React.Component {
	constructor(props){
		super(props);
		this.handleForceUpdata = this.handleForceUpdata.bind(this);

		this.state= {
			cnt:Number(props.cnt)
		}
	}

	handleForceUpdata(){
		console.log(this);
		this.forceUpdate();
	}

	shouldComponentUpdate() {
		console.log('should component update')
	}



	render(){
		return <div>
			<div>{this.state.cnt}</div>
			<button type="button" onClick={this.handleForceUpdata}>add one</button>
		</div>
	}
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.createMarkup = this.createMarkup.bind(this);
    }

    createMarkup() {
        return {__html: 'First &middot; <a href="http://github.com/gaohelong">Second</a>'};
    }

    render() {
        return <div dangerouslySetInnerHTML={this.createMarkup()} />;
    }
}
var setStyle = {
	width: '50px',
	height:'50px',
	lineHeight:'50px',
	backgroundColor: '#000'
}
class HtmlForTest extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div style="width: 50px;height: 50px;backgroundColor: #000">
			<label htmlFor="wxj">this is label</label>
			<input type="text" name="wxj"/>
		</div>
	}
}











/* project */
import Nav from '../src/components/wxj-nav/nav';
import Header from '../src/components/wxj-header/wxj-header';
import MainCont from '../src/components/wxj-mainContent/main-content';

class WxjApp extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (<div>
				<Header/>
				<Nav/>
				<MainCont/>
			</div>
		)
	}

}
ReactDOM.render(<WxjApp/>, document.getElementById('app'));



