import { useState, useEffect } from 'react';


export function UsersList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    return (
        <ul>
            {items.members && items.members.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}