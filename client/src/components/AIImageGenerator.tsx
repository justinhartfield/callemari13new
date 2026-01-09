/**
 * AI Image Generator Component
 * Generates one image per menu item (up to 4) using Ideogram API
 */

import { useState } from "react";
import { Sparkles, Loader2, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface GeneratedImage {
  menuItem: string;
  imageUrl: string;
}

interface AIImageGeneratorProps {
  title: string;
  menuItems: string[];
  chef: string;
  onImagesGenerated: (images: GeneratedImage[]) => void;
  existingImages?: GeneratedImage[];
}

export function AIImageGenerator({ 
  title, 
  menuItems, 
  chef,
  onImagesGenerated,
  existingImages = []
}: AIImageGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const generateMutation = trpc.ideogram.generateMultiple.useMutation({
    onSuccess: (data) => {
      const images = data.images.map(img => ({
        menuItem: img.menuItem,
        imageUrl: img.imageUrl,
      }));
      onImagesGenerated(images);
      toast.success(`¡${data.count} imágenes generadas con éxito!`);
      setIsGenerating(false);
      setProgress(0);
    },
    onError: (error) => {
      toast.error("Error al generar imágenes: " + error.message);
      setIsGenerating(false);
      setProgress(0);
    }
  });

  const handleGenerate = () => {
    const validMenuItems = menuItems.filter(item => item.trim());
    
    if (!title.trim()) {
      toast.error("Por favor, introduce un título para el evento");
      return;
    }
    
    if (validMenuItems.length === 0) {
      toast.error("Por favor, añade al menos un plato en el menú para generar imágenes");
      return;
    }

    if (validMenuItems.length > 4) {
      toast.info(`Se generarán imágenes para los primeros 4 platos`);
    }

    setIsGenerating(true);
    setProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + (90 / (validMenuItems.length * 10));
      });
    }, 1000);

    generateMutation.mutate({
      title,
      menuItems: validMenuItems.slice(0, 4),
      chef: chef || undefined,
    });
  };

  const handleRemoveImage = (index: number) => {
    const newImages = existingImages.filter((_, i) => i !== index);
    onImagesGenerated(newImages);
  };

  const itemCount = menuItems.filter(item => item.trim()).length;
  const itemsToGenerate = Math.min(itemCount, 4);

  return (
    <div className="space-y-4 pt-2">
      {/* Existing Images Grid */}
      {existingImages.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-ink">Imágenes generadas ({existingImages.length}):</p>
          <div className="grid grid-cols-2 gap-2">
            {existingImages.map((img, index) => (
              <div key={index} className="relative group">
                <img 
                  src={img.imageUrl} 
                  alt={img.menuItem}
                  className="w-full h-24 object-cover rounded border-2 border-ink"
                />
                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-xs text-ink/70 mt-1 truncate">{img.menuItem}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generate Button */}
      <Button
        type="button"
        onClick={handleGenerate}
        disabled={isGenerating || !title.trim() || itemCount === 0}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold border-2 border-ink shadow-brutal"
      >
        {isGenerating ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" />
            Generando {itemsToGenerate} imágenes... {Math.round(progress)}%
          </>
        ) : (
          <>
            <Sparkles size={18} className="mr-2" />
            {existingImages.length > 0 
              ? `Regenerar Imágenes (${itemsToGenerate} platos)`
              : `Generar Imágenes del Menú (${itemsToGenerate} platos)`
            }
          </>
        )}
      </Button>
      
      <p className="text-xs text-ink/60 text-center">
        {itemCount === 0 
          ? "Añade platos al menú para generar imágenes"
          : `Genera una imagen por cada plato del menú (máx. 4)`
        }
      </p>

      {/* Progress indicator during generation */}
      {isGenerating && (
        <div className="space-y-2">
          <div className="w-full bg-ink/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-ink/60">
            <ImageIcon size={14} />
            <span>Generando imágenes con IA para cada plato...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIImageGenerator;
