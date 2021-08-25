import { useState } from "react";

import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

const Post = () => {
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
};

export default Post;
