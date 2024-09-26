import prisma from "@/db"

const PostSlug = async ({ params }: { params: { slug: string } }) => {
    // const { slug } = params

    const singlePost = await prisma.post.findFirst({
        where: {
            slug: params.slug
        }
    })

    return (
        <div>
            <h1>Post Slug</h1>

            <div>Title: {singlePost?.title}</div>
            <div>Content: {singlePost?.content}</div>
        </div>
    )
}

export default PostSlug