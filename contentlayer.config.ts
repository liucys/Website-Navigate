import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import emoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const ImageTools = defineDocumentType(() => ({
  name: "ImageTools",
  filePathPattern: `image-tools.md`,
  contentType: "markdown",
  isSingleton: true,
}));

export const MediaTools = defineDocumentType(() => ({
  name: "MediaTools",
  filePathPattern: `media-tools.md`,
  contentType: "markdown",
  isSingleton: true,
}));

export const EditOnline = defineDocumentType(() => ({
  name: "EditOnline",
  filePathPattern: `onlineEdit.md`,
  contentType: "markdown",
  isSingleton: true,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ImageTools, EditOnline, MediaTools],
  markdown: {
    remarkPlugins: [remarkGfm, remarkBreaks, emoji],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
