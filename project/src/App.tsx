import React, { useState } from 'react';
import { CardEditor } from './components/CardEditor';
import { CardPreview } from './components/CardPreview';
import { templates } from './templates';
import { CardData } from './types';
import { Flower2 } from 'lucide-react';

function App() {
  const [cardData, setCardData] = useState<CardData>({
    template: templates[0],
    message: "Happy Women's Day! Thank you for being an inspiration with your strength, grace, and wisdom. May your day be filled with joy and appreciation.",
    recipient: "",
    sender: "",
    recipientPhoto: undefined
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/watercolor-abstract-floral-background_52683-134424.jpg?t=st=1741369999~exp=1741373599~hmac=6c68047b81ae7c82e08f83e538d4d2a7721307f96c1259ec204d511bd31bd8cc&w=1380')",
        backgroundAttachment: "fixed",
      }}
    >
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-800 flex items-center justify-center gap-3">
          <Flower2 className="w-10 h-10 text-pink-600" />
          Women's Day E-Cards
        </h1>
        <p className="mt-4 text-lg text-gray-900 drop-shadow-md">Create and share beautiful cards for International Women's Day</p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <CardEditor cardData={cardData} setCardData={setCardData} />
          <CardPreview cardData={cardData} />
        </div>
      </main>

      <footer className="text-center py-8 text-gray-900 drop-shadow-md">
        <p className="text-sm">Made with ❤️ for International Women's Day</p>
      </footer>
    </div>
  );
}

export default App;
