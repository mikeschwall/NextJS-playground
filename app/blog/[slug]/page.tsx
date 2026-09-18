import axios from "axios";

export default async function BlogPost({params}:PageProps<'/blog/[slug]'>) {
    const {slug} = await params;
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/" + slug);
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {data?.body}
        
      </main>
    </div>
    )

}