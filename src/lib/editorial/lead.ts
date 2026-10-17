type SectionWithBlocks<T extends { type: string; text?: string }> = {
  blocks: T[];
};

export function takeLeadSnippet<T extends { type: string; text?: string }, S extends SectionWithBlocks<T>>(
  sections: S[],
): { lead?: string; sections: S[] } {
  const first = sections[0];
  if (!first) {
    return { sections };
  }
  const index = first.blocks.findIndex((block) => block.type === "snippet" && block.text);
  if (index < 0) {
    return { sections };
  }
  const lead = first.blocks[index]?.text;
  const blocks = first.blocks.filter((_, blockIndex) => blockIndex !== index);
  const rest = sections.slice(1);
  return {
    lead,
    sections: blocks.length > 0 ? [{ ...first, blocks }, ...rest] : rest,
  };
}
