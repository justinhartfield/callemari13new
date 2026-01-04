import { useState, useRef, useCallback } from "react";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onRemove?: () => void;
  placeholder?: string;
  className?: string;
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  placeholder = "Arrastra una imagen o haz clic para seleccionar",
  className = "",
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const uploadMutation = trpc.upload.image.useMutation();

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Solo se permiten archivos de imagen");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("El archivo es demasiado grande (máximo 10MB)");
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(",")[1];
        
        const result = await uploadMutation.mutateAsync({
          filename: file.name,
          data: base64,
          contentType: file.type,
        });
        
        onChange(result.url);
        setIsUploading(false);
      };
      reader.onerror = () => {
        setError("Error al leer el archivo");
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Error al subir la imagen");
      setIsUploading(false);
    }
  }, [onChange, uploadMutation]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const handleRemove = useCallback(() => {
    onChange("");
    onRemove?.();
  }, [onChange, onRemove]);

  if (value) {
    return (
      <div className={`relative group ${className}`}>
        <img
          src={value}
          alt="Uploaded"
          className="w-full h-48 object-cover rounded-lg border-4 border-ink shadow-brutal"
        />
        <button
          type="button"
          onClick={handleRemove}
          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-brutal-sm"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-4 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-200
          ${isDragging 
            ? "border-valencia bg-valencia/10" 
            : "border-ink/30 hover:border-ink hover:bg-cream/50"
          }
          ${isUploading ? "pointer-events-none opacity-50" : ""}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        
        {isUploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-10 h-10 text-valencia animate-spin" />
            <p className="text-sm text-ink/60">Subiendo imagen...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            {isDragging ? (
              <ImageIcon className="w-10 h-10 text-valencia" />
            ) : (
              <Upload className="w-10 h-10 text-ink/40" />
            )}
            <p className="text-sm text-ink/60">{placeholder}</p>
            <p className="text-xs text-ink/40">PNG, JPG, GIF hasta 10MB</p>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

interface GalleryUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
  maxImages?: number;
  className?: string;
}

export function GalleryUpload({
  value = [],
  onChange,
  maxImages = 12,
  className = "",
}: GalleryUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const uploadMutation = trpc.upload.image.useMutation();

  const handleFiles = useCallback(async (files: FileList) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024
    );

    if (validFiles.length === 0) {
      setError("No se encontraron archivos de imagen válidos");
      return;
    }

    if (value.length + validFiles.length > maxImages) {
      setError(`Máximo ${maxImages} imágenes permitidas`);
      return;
    }

    setError(null);
    setIsUploading(true);

    const newUrls: string[] = [];

    for (const file of validFiles) {
      try {
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve((reader.result as string).split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const result = await uploadMutation.mutateAsync({
          filename: file.name,
          data: base64,
          contentType: file.type,
        });

        newUrls.push(result.url);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }

    onChange([...value, ...newUrls]);
    setIsUploading(false);
  }, [value, onChange, maxImages, uploadMutation]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleRemove = useCallback((index: number) => {
    const newValue = [...value];
    newValue.splice(index, 1);
    onChange(newValue);
  }, [value, onChange]);

  return (
    <div className={className}>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {value.map((url, index) => (
          <div key={index} className="relative group aspect-square">
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded border-2 border-ink"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 p-0.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {value.length < maxImages && (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`
            border-2 border-dashed border-ink/30 rounded p-4 text-center cursor-pointer
            hover:border-ink hover:bg-cream/50 transition-all
            ${isUploading ? "pointer-events-none opacity-50" : ""}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
            className="hidden"
          />
          {isUploading ? (
            <Loader2 className="w-6 h-6 mx-auto text-valencia animate-spin" />
          ) : (
            <>
              <Upload className="w-6 h-6 mx-auto text-ink/40" />
              <p className="text-xs text-ink/60 mt-1">
                Añadir fotos ({value.length}/{maxImages})
              </p>
            </>
          )}
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
