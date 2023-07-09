import React from 'react'
import "./comments.css"
import { useDataContext } from '../../context/dataContext'

const Comments = ({ comments }) => {

  const { dataState } = useDataContext()

  const user = comments?.find(data => data?.username)
  const userData = dataState?.users?.filter(data => data?.username === user?.username)
  console.log();
  return (
    <div>
      {comments?.length>0 ? <div className="comments-container">
        {comments?.map((data) => {

          const { _id, username, text } = data;
          return (
            <div key={_id}>
              {userData?.map(data => (<div key={data?.id}> <img src={data?.avatar} alt="" className='avatar' /></div>))}

              <p>{username}</p>
              <p>{text}</p>
            </div>
          );
        })}
      </div> : <div className="comments-container"><h3>No Comments Yet!</h3></div>}


    </div>
  );
}

export default Comments