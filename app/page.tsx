import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Gemini Video Analysis Chatbot</h1>
      <ChatInterface />
    </div>
  );
}