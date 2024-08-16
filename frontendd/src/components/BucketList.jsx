
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItem, updateItem, deleteItem } from '../redux/bucketListThunks';

const BucketList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.bucketList);
  const [newItem, setNewItem] = React.useState('');

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAdd = () => {
    if (newItem) {
      dispatch(addItem(newItem));
      setNewItem('');
    }
  };

  const handleToggleVisited = (id, visited) => {
    dispatch(updateItem({ id, visited: !visited }));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h1>Bucket List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new place"
      />
      <button onClick={handleAdd}>Add</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}

      <ul>
  {Array.isArray(items) && items.length > 0 ? (
    items.map(item => (
      <li key={item._id}>
        {item.name}
        <button onClick={() => handleToggleVisited(item._id, item.visited)}>
          {item.visited ? 'Unmark as Visited' : 'Mark as Visited'}
        </button>
        <button onClick={() => handleDelete(item._id)}>Delete</button>
      </li>
    ))
  ) : (
    <p>No items found</p>
  )}
</ul>

    </div>
  );
};

export default BucketList;