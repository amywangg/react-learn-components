import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const ApprovalCard = props => {
    return (
        <div className="ui card">
            {/* show the comment component within approval card */}
            <div className="content">{props.children}</div>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Decline</Button>
                </div>
            </Card.Content>
        </div>
    );
};

export default ApprovalCard;