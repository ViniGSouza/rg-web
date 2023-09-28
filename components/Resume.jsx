"use client"
import Link from "next/link"
import { BiNews } from "react-icons/bi"
import Accordion from "./Accordion"


export const Resume = () => {
  return (
    <section className="py-8 bg-gray-200 border-t-2 border-b-2 border-gray-400 px-60">
      <div className="grid items-start grid-cols-2 mt-4 gap-x-20">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-4">
            <BiNews size={24} className="text-gray-500"/>
            <h2 className="text-lg">Confira as <b>últimas atualizações</b></h2>
          </div>
          <Link href={'/'} className="flex flex-row items-center justify-between py-3 border-b-2 border-gray-300">
            <h3 className="text-xl">Primeira notícia teste...</h3>
            <span className="text-gray-500">01-01-2023</span>
          </Link>

          <Link href={'/'} className="flex flex-row items-center justify-between py-3 border-b-2 border-gray-300">
            <h3 className="text-xl">Segunda notícia teste...</h3>
            <span className="text-gray-500">01-01-2023</span>
          </Link>

          <Link href={'/'} className="flex flex-row items-center justify-between py-3 border-b-2 border-gray-300">
            <h3 className="text-xl">Terceira notícia teste...</h3>
            <span className="text-gray-500">01-01-2023</span>
          </Link>
        </div>

        <div>
          <h3 className="pb-3 my-5 text-2xl font-bold border-b-2 border-gray-300">
            ESTATÍSTICAS DO<b className="text-red-600"> SERVIDOR</b>
          </h3>

          <Accordion
            title="INFORMAÇÕES DE FARM"
            content="Conteúdo..."
          />

          <Accordion
            title="QUESTS"
            content="Conteúdo..."
          />

          <Accordion
            title="TAXAS DE SUCESSO"
            content="Conteúdo..."
          />

          <Accordion
            title="QUEIMADOR DE INCENSO"
            content="Conteúdo..."
          />
        </div>

      </div>
    </section>
  )
}