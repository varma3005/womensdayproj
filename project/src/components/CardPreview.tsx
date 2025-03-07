import React, { useRef } from 'react';
import { CardData } from '../types';
import html2canvas from 'html2canvas';
import { Download, Share2 } from 'lucide-react';

interface CardPreviewProps {
  cardData: CardData;
}

export const CardPreview: React.FC<CardPreviewProps> = ({ cardData }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement('a');
      link.download = 'womens-day-card.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const shareCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob as Blob);
        });
      });

      if (navigator.share) {
        const file = new File([blob], 'womens-day-card.png', { type: 'image/png' });
        try {
          await navigator.share({
            files: [file],
            title: 'Women\'s Day E-Card',
            text: 'Check out this Women\'s Day E-Card I created!'
          });
        } catch (error) {
          console.error('Error sharing:', error);
        }
      }
    }
  };

  return (
    <div className="w-full max-w-md">
      <div
        ref={cardRef}
        className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl relative transform transition-transform hover:scale-[1.02] duration-300"
        style={{
          backgroundImage: `url(${cardData.template.backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={`absolute inset-0 ${cardData.template.overlayColor}`} />

        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div>
            <div className={`p-2 rounded-md ${cardData.template.fontBackgroundColor}`}>
              <div className={`text-3xl ${cardData.template.fontStyle} ${cardData.template.textColor} drop-shadow-lg`}>
                {cardData.recipient ? `Dear ${cardData.recipient}` : 'Dear Friend'}
              </div>
            </div>
            
            {cardData.recipientPhoto && (
              <div className="mt-8 flex justify-center">
                <div className="w-40 h-40 full overflow-hidden border-4 border-white/30 shadow-lg">
                  <img
                    src={cardData.recipientPhoto}
                    alt={cardData.recipient || 'Recipient'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className={`p-2 rounded-md ${cardData.template.fontBackgroundColor}`}>
              <p className={`text-xl leading-relaxed ${cardData.template.textColor} drop-shadow-lg`}>
                {cardData.message}
              </p>
            </div>
            
            <div className={`p-2 rounded-md ${cardData.template.fontBackgroundColor}`}>
              <p className={`text-right ${cardData.template.textColor} drop-shadow-lg`}>
                With love,<br />
                <span className={`text-xl ${cardData.template.fontStyle} mt-2 inline-block`}>
                  {cardData.sender || 'Your Friend'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={downloadCard}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5" />
          Download Card
        </button>
        <button
          onClick={shareCard}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Share2 className="w-5 h-5" />
          Share Card
        </button>
      </div>
    </div>
  );
};
