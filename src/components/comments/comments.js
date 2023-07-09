import React from 'react'
import "./comments.css"

const Comments = ({comments}) => {
  return (
    <div>
      
        <div className="comments-container">
          {comments?.map((data) => {
            
            const { _id, username, text } = data;
            return (
              <div key={_id}>
                <p>{username}</p>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      
    </div>
  );
}

export default Comments