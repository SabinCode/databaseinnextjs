import prisma from "@/db";


const PostDetails = async ({ params }: { params: { id: string } }) => {
    // const {id} = params

    const singlePost = await prisma.post.findFirst({
        where: {
            id: Number(params.id)
        }
    })


    return (
        <>
            <h1>Post Details</h1>
            <div>Title: {singlePost?.title}</div>
            <div>Content: {singlePost?.content}</div>
        </>
    );
};
export default PostDetails;

// PostDetails ma id params ma aucha. jasko type pani diyem.
// tyo id use garera data tanna payo.
// database call garera data tanne