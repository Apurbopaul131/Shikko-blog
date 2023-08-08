/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Blog.css";
import Blogdata from '../Blogdata/Blogdata';
import Bookmark from '../Bookmark/Bookmark';
import Spentime from '../Spentime/Spentime';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Blog = () => {
    const [blogs,setBlogs] = useState([]);
    const [bookmarks,setBookmarks] = useState([]);
    const [spentTime,setSpentTime] = useState(0);
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch("data.json");
            const data = await res.json();
            setBlogs(data);
        }
        loadData();
    },[])
    const handleBookmarkBlog = (blogData) => {
        let checkState = null;
        if(bookmarks.length > 0){
            checkState = bookmarks.find((bookmark)=>bookmark.id === blogData.id)
        }
        if(bookmarks.length === 0 ||!checkState){
            const newBookMark = [...bookmarks,blogData];
            setBookmarks(newBookMark);
        }
        else{
            toast.warning('blog are already bookmarked.',{position: toast.POSITION.TOP_CENTER})
        }
        
        
    }
    const markAsRead = (markData) =>{
        const {readTime} = markData;
        const newReadTime = spentTime + readTime;
        setSpentTime(newReadTime);
        
    }
    return (
        <div className='blogs'>
            <div className="blog-card-container">
                {
                    blogs.map((blog)=><Blogdata key={blog.id} handleBookmarkBlog={handleBookmarkBlog} blog={blog} markAsRead={markAsRead}></Blogdata>)
                }
            </div>
            <div className='blog-info-container'>
                <Spentime spentTime={spentTime}></Spentime>
                <h6>Bookmarked Blogs:{bookmarks.length}</h6>
                {
                    bookmarks.map((bookmark)=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Blog;