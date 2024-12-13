import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <header className="bg-blue-800 text-white py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Pokédex</h1>
            <p className="text-center text-sm mt-1">Explore os Pokémons!</p>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        <footer className="bg-blue-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              Desenvolvido por Márcio Filho.
            </p>
            <p className="text-xs mt-1">Next.js e Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}