export async function onRequestGet(context) {
  const data = await context.env.MY_KV.get("content", { type: "json" });
  return Response.json(data || { content: "", time: "" });
}
