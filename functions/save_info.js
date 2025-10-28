export async function onRequestPost(context) {
  const body = await context.request.json();
  const now = new Date().toLocaleString("zh-CN", { hour12: false });
  const data = { content: body.content || "", time: now };
  await context.env.MY_KV.put("content", JSON.stringify(data));
  return Response.json(data);
}
