// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Don't use icons
USEICONS = 0

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = '../images/' //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>Categories</i>", "")
  aux1 = insFld(foldersTree, gFld("Active verb", "c1.htm"))
