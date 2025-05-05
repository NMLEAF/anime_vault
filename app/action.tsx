"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { data } from "./_data";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?page=${page}&limit=8`
  );

  const items = await response.json();

  return items.data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.mal_id} anime={item} index={index} />
  ));
};
