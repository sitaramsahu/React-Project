import {
  Train,
  Banknote,
  BookOpen,
  ScrollText,
  ShieldCheck,
  Shield,
  Briefcase,
  Monitor,
  Calculator,
  Keyboard,
  Landmark,
  Globe,
  Gavel,
  BarChart2,
  Users,
  Brain,
  Languages,
  Mic,
  BookText,
  Type,
} from "lucide-react";

import * as htmlToImage from "html-to-image";
import { useRef } from "react";
import { Button } from "./ui/button";

const iconList = {
  Train,
  Banknote,
  BookOpen,
  ScrollText,
  ShieldCheck,
  Shield,
  Briefcase,
  Monitor,
  Calculator,
  Keyboard,
  Landmark,
  Globe,
  Gavel,
  BarChart2,
  Users,
  Brain,
  Languages,
  Mic,
  BookText,
  Type,
};

export default function IconExporter() {
  const ref = useRef();

  const handleDownload = async (name) => {
    const node = ref.current;
    const dataUrl = await htmlToImage.toPng(node);
    const link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-50">
      {Object.entries(iconList).map(([name, Icon]) => (
        <div key={name} className="p-2 flex gap-4">
          <div ref={ref}>
            <Icon size={48} />
          </div>
          <Button
            onClick={() => handleDownload(name)}
            className="mt-0 px-2 py-1 bg-blue-500 text-white text-sm rounded"
          >
            Download
          </Button>
        </div>
      ))}
    </div>
  );
}
