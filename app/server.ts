// app/server.ts
import { Request, Response } from 'express';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('public'));

let posts = [
  { id: 1, title: 'Hello World', content: 'This is my first post!' },
  { id: 2, title: 'Playwright is Awesome', content: 'Automation made easy.' }
];

app.get('/api/posts', (req: Request, res: Response) => res.json(posts));
app.post('/api/posts', (req: Request, res: Response) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Simple HTML serving for the mock UI
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h1>Dev Blog</h1>
        <div id="posts"></div>
        <hr/>
        <h3>Create Post</h3>
        <input id="title" placeholder="Title" /><br/>
        <textarea id="content" placeholder="Content"></textarea><br/>
        <button id="submit">Post</button>
        <script>
          async function loadPosts() {
            const res = await fetch('/api/posts');
            const posts = await res.json();
            document.getElementById('posts').innerHTML = posts.map(p => 
              '<div><h2>' + p.title + '</h2><p>' + p.content + '</p></div>'
            ).join('');
          }
          document.getElementById('submit').onclick = async () => {
            await fetch('/api/posts', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
              })
            });
            loadPosts();
          };
          loadPosts();
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Mock app running on http://localhost:3000'));