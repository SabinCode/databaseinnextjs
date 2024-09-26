import prisma from "@/db"

export async function GET() {
    const singlePost = await prisma.post.findMany({
        where: {
            slug: "admin"
        }
    })

    return new Response(JSON.stringify(singlePost))
}

//api banyo. aba api/users ma HIt garda data aaune vayo.