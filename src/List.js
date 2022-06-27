const list = [
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

// const List = (props) => (
//     <ul>
//         {props.list.map((item) => (
//             <Item key={item.objectID} item={item} />
//         ))}
//     </ul>
// );


const List = ({ list, onRemoveItem }) => (
    <ul>
        {list.map((item) => (
            <Item
                key={item.objectID}
                item={item}
                onRemoveItem={onRemoveItem}
            />
        ))}
    </ul>
);

// const Item = (props) => (
//     <li>
//         <span>
//             <a href={props.item.url}>{props.item.title}</a>
//         </span>
//         <span>{props.item.author}</span>
//         <span>{props.item.num_comments}</span>
//         <span>{props.item.points}</span>
//     </li>
// );


const Item = ({ item, onRemoveItem }) => {

    const handleRemoveItem = () => {
        onRemoveItem(item);
    };
    
    return (
        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
                <button type="button" onClick={handleRemoveItem}>
                    Dismiss
                </button>
            </span>
        </li>
    );
};


export default List;