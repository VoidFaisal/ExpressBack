const output = document.querySelector('#output')
const button = document.querySelector('#get-posts-button')

async function getoutput()
{
    try {
        const res  = await fetch('http://localhost:8080/api/posts');
    if (!res.ok)
    {
        throw new Error('Failed to fetch posts');
    }
    const posts = await res.json();
    output.innerHTML='';

    posts.forEach((post) => {
        const postEL = document.createElement('div');
        postEL.textContent = post.post;
        output.appendChild(postEL);
        
    });
        
    } catch (error) {
       console.log('Error Fetching posts:', error) 
    }

    // eventlistener
}
button.addEventListener('click', getoutput);