const agent = new Agent({
    provider: process.env.PROVIDER ?? "nebius",
    model: process.env.MODEL_ID ?? "Qwen/Qwen2.5-72B-Instruct",
    apiKey: process.env.HF_TOKEN,
    servers: [
       
        {
    command: "npx",
    args: [
        "mcp-remote",
        "https://wurkongops_USERNAME-mcp-sentiment.hf.space/gradio_api/mcp/sse"
    ]
}
    ],
});