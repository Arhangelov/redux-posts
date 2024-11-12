import PostList from './features/posts/PostList';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
