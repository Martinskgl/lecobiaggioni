import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center text-wine">
      <p className="font-script text-2xl text-rose">Leco Biaggìoni</p>
      <h1 className="mt-4 font-display text-5xl">Página não encontrada</h1>
      <Link href="/pt" className="btn-wine mt-8">
        Voltar à home
      </Link>
    </div>
  );
}
