import React from "react";
import DocsContent from "./DocsContent.component";
import { DocsProcessor } from "./DocsProcessor";
import { tokenize } from "../../../helpers/tokenize";

const DocsContentContainer = ({ content, version, versions }) => {
  if (!content) {
    return null;
  }

  const { docs = [], type, id } = content;
  const newContent = { ...content };

  newContent.docs = new DocsProcessor(docs)
    .filterExternal()
    .sortByOrder()
    .replaceImagePaths({ type: tokenize(type), id, version, versions })
    .result();

  return <DocsContent tokenize={tokenize} content={newContent} />;
};

export default DocsContentContainer;
