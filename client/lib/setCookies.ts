"use server";
import { cookies } from "next/headers";

type ICookie = {
  type: string;
  tag: string;
  data: string;
};

export default async function setCookies({ type, tag, data }: ICookie) {
  const cookieStore = await cookies();

  if (type === "GET") {
    return cookieStore.get(tag)?.value;
  } else if (type === "SET") {
    cookieStore.set(tag, data);
  } else if (type === "DELETE") {
    cookieStore.delete(tag);
  } else {
    return "Unknown type.";
  }
}
