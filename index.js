/**
 * dsh-human-draft — DeepSeek Harness 插件
 * 撰写论文 / 报告 / 研报等正式文档，并自动套用真实人类写作模板与去 AI 味规范。
 *
 * 本入口只做一件事：通过原生 filesystem provider，把打包的 skills/ 目录
 * 注册为 DSH 的技能树，使 human-draft 技能随插件加载而可用。
 */
import { fileURLToPath } from "node:url";
import { apply as applyFilesystemProvider } from "@deepseek-ai/dsh-skill-filesystem";

const bundledSkillsRoot = fileURLToPath(new URL("./skills/", import.meta.url));

export const name = "dsh-human-draft";
export const inject = ["skills", "agents"];

export function apply(ctx) {
  applyFilesystemProvider(ctx, {
    providerName: "dsh-human-draft",
    includeDefaultRoots: false,
    bundledSkillDir: bundledSkillsRoot,
    watch: false,
  });
}
