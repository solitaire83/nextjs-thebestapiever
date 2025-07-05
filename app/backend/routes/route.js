import { IncrementStats } from "../funcs/IncrStats";

export async function GET() {
    await IncrementStats("/api");
    return new Response("welcome to the best api ever");
}