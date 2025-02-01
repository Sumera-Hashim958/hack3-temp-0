import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`; // Fixed query
export const four = groq`*[_type == "product"][0..3]`;  // Fixed query
