import React from 'react';
import {Link} from 'react-router';

class InboxItem extends React.Component {
	sortByDate(a,b){
		return a.time > b.time ? -1 : a.time < b.time ? 1 : 0;
	};

	messageSummary(messages){
		var lastMessage = messages.sort(this.sortByDate)[0];
		return lastMessage.who + " said " + lastMessage.text;
	};

	// selectedMessages(){
	// 	// console.log(this.props.index);
	// 	this.props.setSelectedConversation(this.props.index);
	// };
	render() {
		// console.log(this.props.index)
	    return (
	    	<tr>
	    		{/*<td><a onClick={this.selectedMessages.bind(this)}>{this.messageSummary(this.props.details.conversations)}</a></td>*/}
				<td><Link to={'/conversation/' + encodeURIComponent(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
	    		<td>{this.props.index}</td>
	    		<td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
	    	</tr>
	    );
	  }
	}

InboxItem.defaultProps = {
};

export default InboxItem;
