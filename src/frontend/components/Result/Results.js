import React from 'react';
import './Results.css';
import people from './image/people.png'



export default function Results() {
    return (
        <table className='resultsTable'>
            <tr>
                <th>User</th>
                <th>Programming Language</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>
                <img className="user-image" src={people} alt="people" />
                <div>dummy Name</div>
                </td>
                <td>dummy Language</td>
                <td>dummy Location</td>
            </tr>
        </table>
    )
}
