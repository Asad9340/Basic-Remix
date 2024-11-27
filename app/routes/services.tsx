import { ActionFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { deleteMessage, getAllMessages, Message } from '~/data/messageData';



export async function loader() {
  const data: Message[] = await getAllMessages();
  return data;
}

export async function action({ request }: ActionFunctionArgs) {
  const method = await request.formData();

  const id = method.get('delete');
  if (typeof id !== 'string') {
    throw new Error('Invalid form data');
  }

  await deleteMessage(id)
  return {message:'success'}

}
function Services() {
  const data = useLoaderData<Message[]>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-6 max-w-5xl mx-auto gap-4">
      {data &&
        data.map(message => (
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
            <p className="flex justify-between gap-4">
              <span className="block mt-2 text-sm text-gray-500">
                {message.id}
              </span>
              <span>
                <Form method="POST">
                  <input type="hidden" name="delete" value={message?.id} />
                  <button type='submit' className="border px-2 py-1 rounded-lg">Delete</button>
                </Form>
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}

export default Services;
