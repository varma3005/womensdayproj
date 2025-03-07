import React from 'react';
import { CardData, Template } from '../types';
import { templates } from '../templates';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';

interface CardEditorProps {
  cardData: CardData;
  setCardData: (data: CardData) => void;
}

export const CardEditor: React.FC<CardEditorProps> = ({ cardData, setCardData }) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCardData({ ...cardData, recipientPhoto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 flex items-center gap-2">
        <Heart className="w-6 h-6 text-pink-600" />
        Design Your Card
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            Choose Template
          </label>
          <select
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
            value={cardData.template.id}
            onChange={(e) => {
              const template = templates.find(t => t.id === Number(e.target.value));
              if (template) {
                setCardData({ ...cardData, template });
              }
            }}
          >
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-purple-500" />
            Add Recipient's Photo
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg cursor-pointer hover:from-pink-600 hover:to-purple-600 transition-all duration-200"
            >
              <ImageIcon className="w-4 h-4" />
              Upload Photo
            </label>
            {cardData.recipientPhoto && (
              <button
                onClick={() => setCardData({ ...cardData, recipientPhoto: undefined })}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove Photo
              </button>
            )}
          </div>
          {cardData.recipientPhoto && (
            <div className="mt-2">
              <img
                src={cardData.recipientPhoto}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-full border-2 border-pink-200"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
            value={cardData.message}
            onChange={(e) => setCardData({ ...cardData, message: e.target.value })}
            placeholder="Write your heartfelt message here..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              value={cardData.recipient}
              onChange={(e) => setCardData({ ...cardData, recipient: e.target.value })}
              placeholder="Recipient's name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              value={cardData.sender}
              onChange={(e) => setCardData({ ...cardData, sender: e.target.value })}
              placeholder="Your name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};