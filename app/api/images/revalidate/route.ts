import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  console.log("Purging cache for force-cache API...");
  revalidateTag("force-cache"); 

  return NextResponse.json({ message: "Cache purged for force-cache!" }, { status: 200 });
}
