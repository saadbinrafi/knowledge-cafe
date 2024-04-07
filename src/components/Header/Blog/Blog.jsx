import PropTypes from 'prop-types';


const Blog = ({ blog }) => {
    const {title, cover} = blog;
    // console.log(blog)
    return (
        <div>
            <img src={cover} alt={`cover pucture of the titel ${title}`} />
            <h2 className='text-2xl'>{title}</h2>
            
        </div>
    );
};

Blog.PropTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;