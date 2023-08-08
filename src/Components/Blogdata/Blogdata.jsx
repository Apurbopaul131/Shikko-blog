/* eslint-disable react/prop-types */
import "./Blogdata.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Blogdata = (props) => {
    const {
        title,
        coverImage,
        author,
        authorImage,
        readTime,
        writeDate
    } = props.blog;
    const handleBookmarkBlog = props.handleBookmarkBlog;
    const markAsRead = props.markAsRead;

    return (
        <div className="blog-data-container">
            <img src={coverImage} alt="" />
            <div className="data-container">
                <div className="author-info">
                    <div className="author-img">
                        <img src={authorImage} alt="" />
                    </div>
                    <div className="author-des">
                        <h3>{author}</h3>
                        <p>{writeDate}</p>
                    </div>
                </div>
                <div className="read-time">
                    <p>{readTime} min read
                    <FontAwesomeIcon onClick={()=>handleBookmarkBlog(props.blog)} className="icon" icon={faBookmark}/>
                    </p>
                </div>
            </div>
            <h1>{title}</h1>
            <p>#beginners #programming</p>
            <a href="" onClick={(e)=>{
                e.preventDefault();
                markAsRead(props.blog);
            }}>Mark as read</a>
        </div>
    );
};

export default Blogdata;