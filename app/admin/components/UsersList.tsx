// список користувачів  який береться з даних Api
"use client";

import React, { useEffect, useState } from "react";
import { User } from "@/app/data/mockData";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  if (users.length === 0) return <p>Завантаження користувачів...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Список користувачів</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p><strong>{user.name}</strong> ({user.role})</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
