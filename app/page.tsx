/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import { use } from "react";
const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col items-center justify-start min-h-screen gap-4 p-24">
      <p>Fetched on server using prisma</p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.imageUrl ? (
                    <img
                      className="rounded-full h-14 w-14"
                      src={user.imageUrl}
                      alt={user.name}
                    />
                  ) : (
                    <div className="rounded-full h-14 w-14 bg-neutral-300" />
                  )}
                </th>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
