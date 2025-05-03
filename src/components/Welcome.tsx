"use client";
import Image from "next/image";

import { Tooltip } from "antd";

export default function Welcome() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-around gap-8 w-full p-10 font-sans">
      <div className="flex-col items-center justify-center lg:w-1/2 w-full">
        <h2 className="xl:text-4xl text-3xl font-bold mb-4">
          Lionel <span className="text-(--color-primary)">DUFOUR</span>
        </h2>
        <h3 className="xl:text-2xl text-xl font-bold mb-4">
          Développeur FullStack Junior
        </h3>
        <p className="xl:text-xl text-lg mb-4">
          Après plus de 10 années dans le secteur du luxe, j’ai choisi de me
          réorienter dans le développement web et mobile. Rigueur, sens du
          détail, autonomie : des atouts que je mets aujourd’hui au service de
          projets numériques.
        </p>
        <p className="xl:text-xl text-lg mb-4">
          Admis au Mastère Big Data & IA de l’IPSSI pour la rentrée d’octobre
          2025, je suis activement à la recherche d’une alternance sur 2 ans
          pour relever de nouveaux défis en entreprise.
        </p>
      </div>
      <div className="flex items-center justify-center lg:w-1/2 w-full hover:scale-105 transition-transform duration-300">
        <Tooltip
          title="Illustration by Storyset"
          placement="top"
          color="#cc5500"
        >
          <Image
            src={"Developer activity-bro.svg"}
            alt="Developer activity"
            width={500}
            height={500}
          />
        </Tooltip>
      </div>
    </div>
  );
}
