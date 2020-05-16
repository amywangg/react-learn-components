import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Steps to creating a component
// 1. identify the JSX that appears to be duplicated
// 2. what is the purpose of that block? Think of a descriptive name
// 3. create a new file to house the component (should have same name)
// 4. create a new component in the new file & paste JSX in
// 5. Make the new component configurable by using props

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:30AM" comment="Practicing with Props..." />
            </ApprovalCard>
            {/* pass props from parent to child */}
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 6:05PM" comment="Bored in quarantine :/" />
            </ApprovalCard>
            {/* use props to show children */}
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Nice Blog Post!" />
            </ApprovalCard>
            <ApprovalCard>
                <h4>Warning!</h4>
                <p>Are you sure you want to do this?</p>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
