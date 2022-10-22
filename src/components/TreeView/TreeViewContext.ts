import { createContext } from "react";

import { TreeViewContextType } from "./TreeView.type";

const TreeViewContext = createContext<TreeViewContextType>({});

export default TreeViewContext;
