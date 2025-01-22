import type { Experimental_LanguageModelV1Middleware } from "ai";

export const customMiddleware: Experimental_LanguageModelV1Middleware = {
  // @ts-expect-error - This is a placeholder implementation.
  transformPrompt: (prompt: string) => {
    const domainKeywords = ["course", "recommendation", "study", "education"];
    const isDomainQuery = domainKeywords.some((kw) =>
      prompt.toLowerCase().includes(kw)
    );
    return isDomainQuery
      ? prompt
      : "This is outside the course recommendation scope. Please ask about courses.";
  },
};
