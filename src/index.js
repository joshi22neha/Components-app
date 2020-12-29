import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" comment="Nice Blog!" time="6:40 pm" image={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" comment="Good subject!" time="4:40 am" image={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" comment="Great content" time="1:00 pm" image={faker.image.image()} />
            </ApprovalCard>
        </div>

    );
};

ReactDom.render(<App/>, document.querySelector('#root'));