This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/post/index.js`. The page auto-updates as you edit the file.

## Add react-draft-wisiwyg

```bash
npm install -S react-draft-wysiwyg draft-js
## or
yarn add react-draft-wysiwyg draft-js
```

## Import

```bash
import { useState } from "react"

import dynamic from "next/dynamic"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
```

## import No SSR

```bash
const EditorState = dynamic(
  import("draft-js").then((mode) => mode.EditorState),
  {
    ssr: false,
    loading: function loading() {
      return <div>Lodding.....</div>;
    },
  }
);

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: function loading() {
      return <div>Loading......</div>;
    },
  }
);
```

## Demo

```bash
const [editorState, setEditorState] = useState(EditorState.createEmpty);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
```

## Learn more

[Document](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp)
[Github](https://github.com/jpuri/react-draft-wysiwyg/tree/705f518fa516f2839394d706e8b11bfd99734abd)

### Finish
