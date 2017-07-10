import React, { Component } from 'react';
import Message from './Message';
import samples from '../sample-data';

class ConversationPane extends Component {
    loadConversationDate(human){
        this.setState(
            {conversations: samples.humans[human].conversations}
        )
    };
    componentWillMount(){
        this.loadConversationDate(this.props.params.human);
    };
    componentWillReceiveProps(nextProps){
        this.loadConversationDate(nextProps.params.human);
    };
    renderMessage(val){
        return <Message who={val.who} text={val.text} key={val.time.getTime()}/>
    };
    render() {
        return (
            <div id="conversation-pane">
                <h1>Conversitation</h1>
                <h3>{this.props.params.human}</h3>
                <div id="messages">
                    {this.state.conversations.map(this.renderMessage.bind(this))}
                </div>
                
            </div>
        );
    }
}

export default ConversationPane;