import { footerCopy } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-6 py-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-lg font-bold text-zinc-300">{footerCopy.brand}</p>
        <p className="mt-2 text-sm text-zinc-500">{footerCopy.tagline}</p>
        <p className="mt-1 text-sm text-zinc-600">{footerCopy.email}</p>
        <p className="mt-6 text-xs text-zinc-700">
          &copy; {footerCopy.copyright}
        </p>
      </div>
    </footer>
  );
}
