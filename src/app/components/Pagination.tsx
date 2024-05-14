import Link from 'next/link'

const Pagination = () => {
  return (
    <div className="flex flex-col justify-center mt-10 gap-4 bg-blue-100 text-black">
        <h1 className="text-center">Paginacion</h1>
        <div className="flex gap-4 justify-center">
          <button >prev</button>
          <span>{1}</span>
          <button >next</button>
        </div>
        <Link href={`/`}>Volver atras</Link>
      </div>
  )
}

export default Pagination