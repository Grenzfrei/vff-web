import Link from "next/link";
import { EVENT, COMPANY, SOCIAL } from "@/lib/constants";
import DividerLeaf from "./prefabs/DividerLeaf";

export default function Footer() {
  return (
    <footer className="bg-surface text-text py-12 desktop:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-8">
          <DividerLeaf direction="horizontal" color="secondary-light" opacity="50" />
        </div>
        <div className="flex flex-col tablet:flex-row justify-between gap-6">
          <div>
            <p className="font-bold text-lg">{EVENT.name}</p>
            <p className="text-sm text-gray-300 mt-1">{COMPANY.name}</p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/impressum" className="hover:text-accent transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent transition-colors">
              Datenschutz
            </Link>
          </div>

          <div className="flex gap-4 text-sm">
            {SOCIAL.instagram && (
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Instagram
              </a>
            )}
            {SOCIAL.facebook && (
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Facebook
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} {COMPANY.name}
        </p>
      </div>
    </footer>
  );
}
