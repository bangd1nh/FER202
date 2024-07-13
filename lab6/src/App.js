import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels, addHotel, updateHotel, deleteHotel } from './hotelSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector(state => state.hotel);
  const [form, setForm] = useState({
    id: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    rating: '',
    description: '',
    rooms: [{ roomId: '', type: '', pricePerNight: '', status: '', description: '' }]
  });

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleRoomChange = (index, e) => {
    const { id, value } = e.target;
    const newRooms = [...form.rooms];
    newRooms[index] = { ...newRooms[index], [id]: value };
    setForm({ ...form, rooms: newRooms });
  };

  const addRoom = () => {
    setForm({ ...form, rooms: [...form.rooms, { roomId: '', type: '', pricePerNight: '', status: '', description: '' }] });
  };
  const [isEditing, setIsEditing] = useState(false);
  const handleSubmit = () => {
    const hotel = { ...form, rating: parseFloat(form.rating) };
    if (isEditing) {
      dispatch(updateHotel(hotel));
    } else {
      dispatch(addHotel(hotel));
    }
    setForm({
      id: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      website: '',
      rating: '',
      description: '',
      rooms: [{ roomId: '', type: '', pricePerNight: '', status: '', description: '' }]
    });
    setIsEditing(false);
  };

  const handleEdit = (hotel) => {
    setForm({
      ...hotel,
      rating: hotel.rating ? hotel.rating.toString() : '',
      rooms: hotel.rooms.map(room => ({
        roomId: room.roomId.toString(),
        type: room.type,
        pricePerNight: room.pricePerNight.toString(),
        status: room.status,
        description: room.description
      }))
    });
  };

  const handleDelete = (id) => {
    console.log(`Deleting hotel with id: ${id}`);
    dispatch(deleteHotel(id))
      .then(response => {
        console.log('Delete response:', response);
      })
      .catch(error => {
        console.error('Delete error:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Hotel Form</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" className="form-control" value={form.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" id="address" className="form-control" value={form.address} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" id="phone" className="form-control" value={form.phone} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-control" value={form.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="website" className="form-label">Website</label>
        <input type="text" id="website" className="form-control" value={form.website} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input type="number" step="0.1" id="rating" className="form-control" value={form.rating} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" id="description" className="form-control" value={form.description} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="rooms" className="form-label">Rooms</label>
        {form.rooms.map((room, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={`roomId-${index}`} className="form-label">Room ID</label>
            <input type="text" id="roomId" className="form-control" value={room.roomId} onChange={(e) => handleRoomChange(index, e)} />
            <label htmlFor={`type-${index}`} className="form-label">Type</label>
            <input type="text" id="type" className="form-control" value={room.type} onChange={(e) => handleRoomChange(index, e)} />
            <label htmlFor={`pricePerNight-${index}`} className="form-label">Price Per Night</label>
            <input type="text" id="pricePerNight" className="form-control" value={room.pricePerNight} onChange={(e) => handleRoomChange(index, e)} />
            <label htmlFor={`status-${index}`} className="form-label">Status</label>
            <input type="text" id="status" className="form-control" value={room.status} onChange={(e) => handleRoomChange(index, e)} />
            <label htmlFor={`description-${index}`} className="form-label">Description</label>
            <input type="text" id="description" className="form-control" value={room.description} onChange={(e) => handleRoomChange(index, e)} />
          </div>
        ))}
        <button className="btn btn-secondary" onClick={addRoom}>Add Room</button>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

      <h2 className="mt-4">Hotels</h2>
      <ul className="list-group">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          hotels.map(hotel => (
            <li key={hotel.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{hotel.name}</h5>
                <p>Address: {hotel.address}</p>
                <p>Phone: {hotel.phone}</p>
                <p>Email: {hotel.email}</p>
                <p>Website: {hotel.website}</p>
                <p>Rating: {hotel.rating}</p>
                <p>Description: {hotel.description}</p>
                <h6>Rooms</h6>
                {hotel.rooms.map((room, index) => (
                  <p key={index}>{room.type} - {room.pricePerNight} - {room.status} - {room.description}</p>
                ))}
              </div>
              <div>
                <button className="btn btn-danger me-2" onClick={() => handleDelete(hotel.id)}>Delete</button>
                <button className="btn btn-secondary" onClick={() => handleEdit(hotel)}>Edit</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;