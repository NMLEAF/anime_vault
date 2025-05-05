"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?page=${page}&limit=8`
  );

  const data = response.json();

  return data;
};
