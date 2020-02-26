import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {

    const [friends, setFriends] = useState([]);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const getFriends = () => {
        axiosWithAuth().get('api/friends').then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleAge = e => {
        setAge(e.target.value)
    }

    const addFriend = e => {
        axiosWithAuth().post('api/friends', {
            name: name,
            age: age,
            email: email
        }).then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    const removeFriend = e => {
        axiosWithAuth().delete(`api/friends/${e.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className='friend-container'>
        <h1 className='title'>Welcome to your dashboard!</h1>

        <form className='add-friend-form' onSubmit={addFriend}>
            <input name='addNew' id='addNew' onChange={handleName} placeholder='Enter name..'/>
            <input name='addEmail' id='addEmail' onChange={handleEmail} placeholder='Enter Email..'/>
            <input name='addAge' id='addAge' onChange={handleAge} placeholder='Enter Age..'/>
            <button>Add friend</button>
        </form>

        <button onClick={getFriends}>View friends list</button>

        {friends.length ? (<div className='friends-list'>
            {friends.map(friend => {
                return (
                    <div className='friends'>
                    <h3>{friend.name}</h3>
                    <h4>Age: {friend.age}</h4>
                    <h4>{friend.email}</h4>
                    <button onClick={() => {
                        removeFriend(friend.id)
                        }}>Remove friend</button>
                    </div>
                )
            })}
        </div>) : (<div></div>) }
        </div>
        </>
    )
}

export default FriendsList;