"use client";
const PostIdError = ({ error }: { error: Error }) => {
    return (
        <div>
            <h1>Post id Error </h1>
            {/* <p>{error.message}</p> */}
        </div>
    );
};

export default PostIdError;