import React from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
<<<<<<< HEAD
  return (
    <div>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 340, flexGrow: 1, maxWidth: 500, overflowY: 'auto' }}
      >
        <TreeItem nodeId="1" label="Comment participer au projet ?">
          <TreeItem
            nodeId="2"
            label="Le principe d'IdFrog est de recevoir une contrepartie en échange de votre soutien."
          />
        </TreeItem>
        <TreeItem
          nodeId="3"
          label="Que se passe t'il si le projet n'est pas financé ?"
        >
          <TreeItem
            nodeId="4"
            label="Si le projet n'est pas fiancé, vous serez remboursé en intégralité"
          />
        </TreeItem>
        <TreeItem nodeId="5" label="Quand est-ce que je suis débité ?">
          <TreeItem
            nodeId="6"
            label="Dès que le projet atteint son objectif de financement"
          />
        </TreeItem>
        <TreeItem nodeId="7" label="Puis-je annuler un don ?">
          <TreeItem
            nodeId="8"
            label="Tant qu'un projet n'a pas atteint son objectif de financement pour pouvez annuler votre don à tout moment"
          />
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default Faq;
=======
    return (
        <div>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 340, flexGrow: 1, maxWidth: 500, overflowY: 'auto' }}
                >
                <TreeItem nodeId="1" label="Comment participer au projet ?">
                    <TreeItem nodeId="2" label="Le principe d'IdFrog est de recevoir une contrepartie en échange de votre soutien." />
                </TreeItem>
                <TreeItem nodeId="3" label="Que se passe t'il si le projet n'est pas financé ?">
                    <TreeItem nodeId="4" label="Si le projet n'est pas fiancé, vous serez remboursé en intégralité" />
                </TreeItem>
                <TreeItem nodeId="5" label="Quand est-ce que je suis débité ?">
                    <TreeItem nodeId="6" label="Dès que le projet atteint son objectif de financement" />
                </TreeItem>
                <TreeItem nodeId="7" label="Puis-je annuler un don ?">
                    <TreeItem nodeId="8" label="Tant qu'un projet n'a pas atteint son objectif de financement pour pouvez annuler votre don à tout moment" />
                </TreeItem>
            </TreeView>
        </div>
    );
};

export default Faq;
>>>>>>> develop
