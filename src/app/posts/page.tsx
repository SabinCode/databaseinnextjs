// import prisma from "@/db"
// import Link from "next/link"
// import { title } from "process"

// const Posts = async () => {
//     const posts = await prisma.post.findMany()

//     return (
//         <>
//             <h1 className="text-3xl font-bold ">All Posts are here</h1>

//             <div>{
//                 posts.map((post) => (
//                     <Link href={`/posts/${post.id}`}
//                         key={post.id}>
//                         <h1>Title: {post.title} </h1>
//                         <h2>Content: {post.content}</h2> <br /> </Link>))}

//             </div>

//         </>
//     )
// }

// export default Posts

//FindMany le sabai post read garna milne vayo. jaslai hamile map garera raad garna sakiyo.
//Link href={`/posts/${post.id}`} le harek post ma click garda post ko id num 1, 2 or 23 etc ma jane vayo dynamically.


import prisma from "@/db"
import Link from "next/link"
import { title } from "process"

const Posts = async () => {
    const posts = await prisma.post.findMany()

    return (
        <>
            <h1 className="text-3xl font-bold ">All Posts are here with slugs now</h1>

            <div>{
                posts.map((post) => (
                    <Link href={`/posts/${post.slug}`}
                        key={post.id}>
                        <h1>Title: {post.title} </h1>
                        <h2>Content: {post.content}</h2> <br /> </Link>))}

            </div>

        </>
    )
}

export default Posts

