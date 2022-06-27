import List from './List'
//import Search from './Search'
import { useState } from 'react';

function getTitle(title) {
  return title;
}


const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];



const App = () => {




  //The status is now in App component, IMPORTANT.
  const [searchTerm, setSearchTerm] = useState('React');


  const [stories, setStories] = useState(initialStories);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      {/* list is a HTML attribute */}
      <List list={searchedStories} onRemoveItem={handleRemoveStory}/>
    </div>
  );
}

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={props.search}
      onChange={props.onSearch}
    />
  </div>
);


export default App;


//Lifting State in React

// Now the Search component doesn’t manage the
// state anymore, but only passes up the event to the App component via a callback handler after the
// text is entered into the HTML input field.