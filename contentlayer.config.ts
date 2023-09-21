import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import emoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Navigation = defineDocumentType(() => ({
  name: "Navigation",
  filePathPattern: `navigation.md`,
  contentType: "markdown",
  isSingleton: true,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Navigation],
  markdown: {
    remarkPlugins: [remarkGfm, remarkBreaks, emoji],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
