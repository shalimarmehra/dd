import React from 'react'

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <main className="container mx-auto flex-1 py-8 px-6">
        <article className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Title</h2>
          <p className="text-gray-600 mb-4">Published on: April 1, 2023</p>
          <div className="prose">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a tincidunt euismod, nisl magna tincidunt nunc, eu consectetur justo massa vel ex. Suspendisse potenti. Nullam euismod efficitur libero, vel tincidunt velit vulputate eu.</p>
            <p>Donec eget leo quam. Duis id velit ut est tincidunt faucibus. Mauris ut efficitur mauris. Nullam vel aliquet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vel mauris dolor.</p>
            {/* Add more content here */}
          </div>
        </article>
      </main>
    </div>
  )
}

export default BlogPage
