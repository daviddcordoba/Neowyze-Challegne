import api from "@/api";
import CharacterCard from "../components/CharacterCard";


export default async function CharacterCollection({ params: { character_detail_id } }: { params: { character_detail_id: string } }) {
  const characters = await api.character_fetch(character_detail_id);

  return (
    <section>
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            
        </section>
    </section>
  );
}

