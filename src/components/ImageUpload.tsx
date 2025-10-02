"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X, Image as ImageIcon, Check } from "lucide-react";
import { validateFileType, validateFileSize, sanitizeFilename } from "@/lib/validation";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
  className?: string;
}

export default function ImageUpload({ onImageUpload, currentImage, className = "" }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    setError(null);
    
    // Security checks
    const allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    // Check file type
    if (!validateFileType(file.name, allowedTypes)) {
      setError('Invalid file type. Please upload JPG, PNG, GIF, or WebP files only.');
      return;
    }

    // Check file size
    if (!validateFileSize(file.size, maxSize)) {
      setError('File size must be less than 5MB.');
      return;
    }

    // Check MIME type
    if (!file.type.startsWith('image/')) {
      setError('Invalid file type. Please upload an image file.');
      return;
    }

    // Sanitize filename
    const sanitizedName = sanitizeFilename(file.name);
    if (!sanitizedName) {
      setError('Invalid filename.');
      return;
    }

    setUploading(true);

    try {
      // Create a local URL (in production, upload to secure storage)
      const imageUrl = URL.createObjectURL(file);
      
      // Simulate upload delay with security scan
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Additional security: Check if image is valid
      const img = new Image();
      img.onload = () => {
        // Image loaded successfully
        onImageUpload(imageUrl);
        setUploaded(true);
        setUploading(false);
        
        // Reset uploaded status after 2 seconds
        setTimeout(() => setUploaded(false), 2000);
      };
      
      img.onerror = () => {
        // Invalid image file
        setError('Invalid image file. Please upload a valid image.');
        setUploading(false);
        URL.revokeObjectURL(imageUrl);
      };
      
      img.src = imageUrl;
      
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
      setUploading(false);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    onImageUpload('');
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={className}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept="image/*"
        className="hidden"
      />

      {currentImage ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Current Image
              </span>
              <Button
                variant="destructive"
                size="sm"
                onClick={removeImage}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src={currentImage}
                alt="Current"
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button onClick={openFileDialog} variant="outline" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Change Image
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card
          className={`border-2 border-dashed transition-colors ${
            dragActive 
              ? 'border-blue-500 bg-blue-50' 
              : error
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <CardContent className="p-8 text-center">
            {uploading ? (
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600">Uploading image...</p>
              </div>
            ) : uploaded ? (
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-green-600 font-medium">Image uploaded successfully!</p>
              </div>
            ) : error ? (
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-red-600 font-medium">{error}</p>
                <Button onClick={openFileDialog} variant="outline">
                  Try Again
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Upload an image</p>
                  <p className="text-sm text-gray-500">PNG, JPG, GIF, WebP up to 5MB</p>
                </div>
                <Button onClick={openFileDialog}>
                  <Upload className="w-4 h-4 mr-2" />
                  Select Image
                </Button>
                <p className="text-xs text-gray-500">or drag and drop</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Image Gallery Component
interface ImageGalleryProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
}

export function ImageGallery({ images, onImagesChange, maxImages = 10 }: ImageGalleryProps) {
  const handleAddImage = (imageUrl: string) => {
    if (images.length < maxImages) {
      onImagesChange([...images, imageUrl]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Product Images</h4>
        <span className="text-sm text-gray-500">
          {images.length}/{maxImages} images
        </span>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {images.length < maxImages && (
        <ImageUpload
          onImageUpload={handleAddImage}
          className="mt-4"
        />
      )}
    </div>
  );
}