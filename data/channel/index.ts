import type { ChannelPageData } from "@/components/custom/channel/types";
import southforkRoofing from "./southfork-roofing";

const channelDataMap: Record<string, ChannelPageData> = {
  "southfork-roofing": southforkRoofing,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
