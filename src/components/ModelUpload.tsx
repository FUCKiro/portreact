import { Upload } from 'lucide-react';

interface ModelUploadProps {
  onModelUpload: (url: string) => void;
}

export function ModelUpload({ onModelUpload }: ModelUploadProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.gltf')) {
      alert('Please upload a GLTF file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      onModelUpload(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-600 rounded-lg hover:border-indigo-500 transition-colors">
      <Upload className="w-8 h-8 mb-2 text-gray-400" />
      <label className="cursor-pointer">
        <span className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Choose GLTF File
        </span>
        <input
          type="file"
          accept=".gltf"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
      <p className="mt-2 text-sm text-gray-400">Upload your GLTF model file</p>
    </div>
  );
}