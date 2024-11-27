import { useLoaderData } from '@remix-run/react';
import { getAllMessages } from '~/data/messageData';

export async function loader() {
  const data = await getAllMessages();
  return data;
}
function services() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-6 max-w-5xl mx-auto gap-4'>
      {data &&
        data?.map(message => (
          <div
            key={message.id}
            className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {message.name}
            </h2>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {message.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Message:</span> {message.message}
            </p>
            <span className="block mt-2 text-sm text-gray-500">
              {message.id}
            </span>
          </div>
        ))}
    </div>
  );
}

export default services;
