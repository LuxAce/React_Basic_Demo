import React from "react"

function CommentList({comments}){

    return (
        <div className="commemt-list-component">
            <label>
                评论列表
            </label>
            <ul className="list-group mb-3">
                {
                    comments.map(
                        (comment,index)=>
                            <li 
                                key={index} 
                                className="list-group-item">
                            {comment}
                            </li>        
                    )
                }
            </ul>

        </div>
    )
}

export default CommentList