import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { ZDK, ZDKNetwork } from "@zoralabs/zdk";

import { env } from "@/env.mjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// endpoint docs gave me:  https://api.zora.co/graphql
export const zdk = new ZDK({
  endpoint: "https://api.zora.co/graphql",
  networks: [
    {
      // @ts-ignore
      chain: "ZORA_SEPOLIA",
      network: ZDKNetwork.Zora,
    },
  ],
});

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard: ", text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
