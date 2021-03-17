import React from "react";
import wiki from "wikijs";

interface infoFormat {
  general: any;
  lists: Array<any>;
  tables: Array<any>;
}

export const useWikiInfo = (
  name: string
): { summary?: string; content?: any; info?: infoFormat } => {
  const [summary, setSummary] = React.useState<string>();
  const [content, setContent] = React.useState<any>();
  const [info, setInfo] = React.useState<infoFormat>();
  React.useEffect(() => {
    const page = wiki().page(`${name} (constellation)`);

    page
      .then((page) => page.summary())
      .then((summary) => {
        setSummary(summary);
      });
    page.then((page) =>
      page.content().then((content) => {
        setContent(content);
      })
    );
    page.then((page) =>
      page.fullInfo().then((info) => {
        setInfo(info as infoFormat);
      })
    );
  }, [name]);

  return { summary: summary, content: content, info: info };
};
