import React from 'react'
import "./comments.css"
import { useDataContext } from '../../context/dataContext'

const Comments = ({ comments }) => {

  const { dataState } = useDataContext()

  return (
    <div>
      {comments?.length > 0 ? <div>
        <h3 style={{textAlign:"center"}}>Comments</h3>
        {comments?.map((data) => {

          const { _id, username, text } = data;
          return (
            <div className="comments-container" key={_id}>
              <div>
                {dataState?.users?.map((data) =>
                  data?.username === username ? (
                    <img
                      key={data?.id}
                      src={
                        data?.avatar ??
                        "https://fastly.picsum.photos/id/100/150/150.jpg?hmac=uGUauJoHAFEamhXY6HLrXsmhPdapec4KAi8TqFasrQo"
                      }
                      alt="avatar"
                      className="avatar"
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="comment-text">
                <p>
                  <strong>{username}</strong>
                </p>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div> : <div className="comments-container"><h3>No Comments Yet!</h3></div>}


    </div>
  );
}

export default Comments