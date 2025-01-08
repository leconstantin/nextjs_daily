import { ResourcesList } from "@/components/feed-resource-list";

const resources = [
  {
    id: "1",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-02"),
  },
  {
    id: "2",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",

    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-02"),
  },
  {
    id: "3",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-02"),
  },
  {
    id: "4",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-04-02"),
  },
  {
    id: "5",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-02"),
  },
  {
    id: "6",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-02"),
  },
  {
    id: "7",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-02"),
  },
  {
    id: "8",
    title:
      "GitHub - vercel-labs/gemini-chatbot: Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini",
    description:
      "Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini - vercel-labs/gemini-chatbot",
    url: "https://github.com/resource-one",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-02"),
  },
];
export default async function Default() {
  return <ResourcesList resources={resources} />;
}
