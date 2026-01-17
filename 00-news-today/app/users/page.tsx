'use client'; // 이 지시어가 있어야 클라이언트 컴포넌트가 됩니다.

import { useState, useEffect } from 'react';

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. 브라우저에 마운트된 후 실행 (CSR의 핵심)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 2. 로딩 상태 처리
  if (isLoading) return <p>데이터를 불러오는 중입니다 (CSR)...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">사용자 목록 (CSR 방식)</h1>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="p-2 border rounded shadow-sm">
            {user.name} - <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
