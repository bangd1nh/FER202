import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  const News = [
    {
      "id": 1,
      "title": "Breaking News: Market Hits All-Time High",
      "author": "Jane Doe",
      "date": "2024-05-21",
      "content": "The stock market reached an all-time high today, with major indices showing significant gains...",
      "category": "Business",
      "tags": ["market", "stocks", "finance"],
      "image": "market.jpg",
      "url": "https://example.com/news/market-hits-all-time-high"
    },
    {
      "id": 2,
      "title": "Tech Giants Announce New Partnership",
      "author": "John Smith",
      "date": "2024-05-20",
      "content": "In a surprising move, two of the largest tech companies have announced a strategic partnership...",
      "category": "Technology",
      "tags": ["tech", "partnership", "innovation"],
      "image": "technology.jpg",
      "url": "https://example.com/news/tech-giants-announce-partnership"
    },
    {
      "id": 3,
      "title": "Local Community Rallies for Environmental Cause",
      "author": "Emily Johnson",
      "date": "2024-05-19",
      "content": "Residents of the local community gathered today to support environmental conservation efforts...",
      "category": "Environment",
      "tags": ["community", "environment", "conservation"],
      "image": "community.jpg",
      "url": "https://example.com/news/community-rallies-environmental-cause"
    }
  ]




  const [news, setNews] = useState(News);
  const [newNews, setNewNews] = useState({ id: '', title: '', author: '', date: '', content: '', category: '',tags :'',image:'',url:'' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNews({ ...newNews, [name]: value });
  };

  const addNews = () => {
    setNews([...news, { ...newNews, id: (news.length + 1).toString() }]);
    setNewNews({ id: '', title: '', author: '', date: '', content: '',category:'',tags:'', image: '',url:'' });
  };

  const updateNews = (id) => {
    setNews(news.map(news => (news.id === id ? newNews : news)));
    setNewNews({ id: '', title: '', author: '', date: '', content: '', category: '',tags :'',image:'',url:'' });
  };

  const deleteNews = (id) => {
    setNews(news.filter(news => news.id !== id));
  };

  const editNews = (news) => {
    setNewNews(news);
  };

  const getImagePath = (imageName) => {
    return require(`./images/${imageName}`);
  };

  return (
    <div class="container">
      <div>
        <h1 class="text-center">NEWS</h1>
        <table class="table table-sm table-responsive">
          <thead calss="table-light">
            <tr>
            <th>
              Title
            </th>
            <th>
              author
            </th>
            <th>
              date
            </th>
            <th>
              content
            </th>
            <th>
              category
            </th>
            <th>
              tags
            </th>
            <th>
              image
            </th>
            <th>
              url
            </th>
            </tr>
          </thead>
          <tbody>
            {news.map(item => 
              <tr key={item}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
                <td>{item.content}</td>
                <td>{item.category}</td>
                <td>{item.tags}</td>
                <td><img src={getImagePath(item.image)} alt='#' class="img-fluid"></img></td>
                <td><a href={item.url}>{item.url}</a>
                </td>
                <td >
                  <button onClick={() => editNews(item)}class="btn btn-outline-dark d-inline" >Edit</button>
                  <button onClick={() => deleteNews(item.id)}class="btn btn-outline-dark d-inline" >Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div class="form-control">
        <h1>NEWs !</h1>
        <label for="title" class="form-label">title</label>
        <input name="title" id="title" value={newNews.title} onChange={handleInputChange} placeholder="title" class="form-control" /><br></br>
        <label for="author" class="form-label">author</label>
        <input name="author" id="author" value={newNews.author} onChange={handleInputChange} placeholder="author" class="form-control" /><br></br>
        <label for="date" class="form-label">date</label>
        <input name="date" id="date" value={newNews.date} onChange={handleInputChange} placeholder="date" class="form-control" type="date" /><br></br>
        <label for="content" class="form-label">content</label>
        <input name="content" id="content" value={newNews.content} onChange={handleInputChange} placeholder="content" class="form-control" /><br></br>
        <label for="category" class="form-label">category</label>
        <input name="category" id="category" value={newNews.category} onChange={handleInputChange} placeholder="category" class="form-control" /><br></br>
        <label for="tags" class="form-label">tags</label>
        <input name="tags" id="tags" value={newNews.tags} onChange={handleInputChange} placeholder="tags" class="form-control" /><br></br>
        <label for="image" class="form-label">image</label>
        <input name="image" id="image" value={newNews.image} onChange={handleInputChange} placeholder="Image" class="form-control" /><br></br>
        <button onClick={addNews} class="btn-primary btn">Add New</button>
        {newNews.id && <button onClick={() => updateNews(newNews.id)} class="btn-secondary btn">Update New</button>}
      </div>
    </div>
  );
}

export default App;
