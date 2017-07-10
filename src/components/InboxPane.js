import React from 'react';
import InboxItem from './InboxItem';

class InboxPane extends React.Component {
  render() {
  	
  	let humanItems;
  	if (this.props.humans){
  		humanItems = Object.keys(this.props.humans).map(human => {
				
  			return(
  				//  <InboxItem key={human} index={human} details={this.props.humans[human]} setSelectedConversation={this.props.setSelectedConversation} />
					<InboxItem key={human} index={human} details={this.props.humans[human]} />
  		
				)
    	});
  	}


    return (
      <div>
      	<div id= "inbox-pane">
      		<h1>Inbox</h1>
      		<table>
      			<thead>
      				<tr>
      					<th>Chat Received</th>
      					<th>Name</th>
      					<th>Status</th>
      				</tr>
      			</thead>
      			<tbody>
      				{humanItems}
      			</tbody>
      		</table>
      	</div>
      </div>
    );
  }
}

InboxPane.defaultProps = {
};

export default InboxPane;
