import { CopyrightOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-9/10 h-20 gap-2 border-t">
      <CopyrightOutlined />
      <p className="text-sm">2025 Lionel Dufour. Tous droits réservés</p>
    </footer>
  );
}
