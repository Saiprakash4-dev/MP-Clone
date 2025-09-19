
import React, { useEffect, useState } from "react";

type Link = {
  id: number;
  name: string;
  url: string;
};

export default function Home() {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from backend
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Map placeholder data to Link type
        const mappedLinks = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          url: `https://example.com/user/${user.id}`,
        }));
        setLinks(mappedLinks);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Personal Page</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
