import { Breadcrumbs } from "@/components/breadcrumbs";

export default function Home() {
  return (
    <main className="px-16 py-8">
      <Breadcrumbs items={[{ label: "Home" }]} />
      <h1 className="font-serif text-6xl font-bold">Tindahan ni Rene</h1>
      <p className="mt-2 text-neutral-500">The store&apos;s credit ledger. Sign in to see who owes what.</p>
    </main>
  );
}