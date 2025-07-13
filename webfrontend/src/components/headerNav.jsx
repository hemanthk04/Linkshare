// src/components/Header.jsx
import { GithubLogo } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="text-orange-600 font-bold text-xl">Linkshare</div>
      <GithubLogo size={24} weight="fill" className="text-orange-600" />
    </div>
  );
}
