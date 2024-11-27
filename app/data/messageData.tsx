import fs from 'fs/promises';
import path from 'path';

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
};

export const createMessage = async (message: Message) => {
  const filePath = path.join(process.cwd(), 'messages.json');

    const data = await fs.readFile(filePath, 'utf-8');
    const messages: Message[] = JSON.parse(data);
    messages.push(message);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2));
};

export const getAllMessages = async () => {
  const filePath = path.join(process.cwd(), 'messages.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}
export const deleteMessage = async (id: string): Promise<void> => {
  const filePath = path.join(process.cwd(), 'messages.json');
  const messages: Message[] = JSON.parse(await fs.readFile(filePath, 'utf-8'));
  const updatedMessages = messages.filter(message => message.id !== id);
  await fs.writeFile(filePath, JSON.stringify(updatedMessages, null, 2));
};