import Link from "next/link"


export default async function Home() {
  return (
    <section className="flex justify-center items-center h-screen">
  <div className="flex flex-col gap-8 text-center">
    <h1 className="text-4xl font-bold mb-8">Bienvenido a StarWarsApp</h1>
    <div className="grid grid-cols-2 gap-4">
      <Link href="/films" className="p-4 border rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        
          <span className="text-xl font-semibold">Ir a Películas</span>
        
      </Link>
      <Link href="/characters" className="p-4 border rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        
          <span className="text-xl font-semibold">Ir a Personajes</span>
        
      </Link>
    </div>
  </div>
</section>
  );
}
