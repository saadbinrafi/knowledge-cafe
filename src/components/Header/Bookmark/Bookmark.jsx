import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white my-5  p-3 text-center font-semibold m-5 '>
            <h3 className=''>{title}</h3>
        </div>
    );
};




Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;