import React from 'react';

const page = () => {
  return (
    <div>
      test
    </div>
  );
};

export default page;
// 'use client'
// import { useState, useEffect } from "react";
// import { z } from "zod";

// // Création du schéma que l'on doit recevoir par l'API (exemle avec l'api : https://jsonplaceholder.typicode.com/users)

// // Si on regarde la réponse renvoyée par l'API, il y'aura bien plus de propriétés à Users
// // Avec Zod on peut limiter à ce dont on a besoin (ici id/name/email/website)

// const UserSchema = z.object({
//     id: z.number(),
//     name: z.string(),
//     email: z.string().email(),
//     website: z.string(),
// })

// // On le transforme en array (car on attend un tableau de plusieurs utilisateurs)
// const UsersSchema = z.array(UserSchema)
// // Extraire le type de schéma
// type User = z.infer<typeof UsersSchema>;

// const fetchUsers = async (): Promise<User> => { // On applique le type du Schéma à la promise
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   ).then((res) => res.json());

//   // On vérifie si le type envoyé par l'api est conforme au schéma et on le retourne
//   const userVerified = UsersSchema.parse(response);
//   return userVerified;
// };

// export default function App() {
//   const [users, setUsers] = useState<User>([]); // Type du schéma
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     fetchUsers().then((users) => setUsers(users))
//     .catch((error) => setError(error));
//   }, []);

//   return (
//     <div className="App">
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <p>
//               Name : <b>{user.name}</b>
//             </p>
//             <p>
//               Email : <b>{user.email}</b>
//             </p>
//             <a href={user.website}>{user.website}</a>
//           </li>
//         ))}
//       </ul>
//       {error !== null && "error"}
//     </div>
//   );
// }
