import Link from "next/link"


export default async function Home() {
  return (
    <section >
      <div className="flex flex-col gap-2">
        <Link href={`/films`}><span>Ir a peliculas</span></Link>
        <Link href={`/characters`}><span>Ir a persojanes</span></Link>
       
      </div>
    </section>
  );
}
