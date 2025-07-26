// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { UserInputFormBackendHandler } from './UserInputFormBackend';
import { AITemplateGeneratorHandler } from './AITemplateGenerator';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/UserInputFormBackend") return UserInputFormBackendHandler(request);
  if (path === "/api/AITemplateGenerator") return AITemplateGeneratorHandler(request);

  return new Response("Not found", { status: 404 });
}
