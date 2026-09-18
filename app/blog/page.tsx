import Link from "next/link";

export default function Blog() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <h2>Blogs</h2>
            <Link href="/blog/1">Blog post 1</Link>
            <Link href="/blog/2">Blog post 2</Link>
        
        
      </main>
    </div>
    )
}