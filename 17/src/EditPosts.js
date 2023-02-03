import React from 'react'
import { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
const EditPosts = ({
    posts,handleEdit,editBody,setEditBody,editTitle,setEdittitle
}) => {

    const {id} = useParams();
    const post = posts.find(post=> (post.id).toString() === id);

    useEffect(()=> {
        if(post){
            setEdittitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEdittitle,setEditBody]);

  return (
    <main className="NewPost">
        {editTitle && <>
            <h2>Edit Post</h2>
            <form className="newPostForm" onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEdittitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" onClick={()=> handleEdit(post.id)}>Submit</button>
            </form>
            </>
        }
        {
            !editTitle && 
            <>
                <p>
                    That is dissapointing
                </p>
            </>
        }
        </main>
  )
}

export default EditPosts