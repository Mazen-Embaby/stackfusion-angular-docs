import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree, CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

/** Flat node with expandable and level information */
interface FlatFoodNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface NestedFoodNode {
  name: string;
  children?: NestedFoodNode[];
}

function flattenNodes(nodes: NestedFoodNode[]): NestedFoodNode[] {
  const flattenedNodes = [];
  for (const node of nodes) {
    flattenedNodes.push(node);
    if (node.children) {
      flattenedNodes.push(...flattenNodes(node.children));
    }
  }
  return flattenedNodes;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-default-tooltip-example',
  imports: [CdkTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './tree-with-flat-nodes-page.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeWithFlatNodesPage {
  @ViewChild(CdkTree)
  tree!: CdkTree<FlatFoodNode>;

  levelAccessor = (dataNode: FlatFoodNode) => dataNode.level;

  dataSource = new ArrayDataSource(EXAMPLE_DATA);

  hasChild = (_: number, node: FlatFoodNode) => node.expandable;

  getParentNode(node: FlatFoodNode) {
    const nodeIndex = EXAMPLE_DATA.indexOf(node);

    // Determine the node's parent by finding the first preceding node that's
    // one level shallower.
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (EXAMPLE_DATA[i].level === node.level - 1) {
        return EXAMPLE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: FlatFoodNode): boolean {
    // This node should render if it is a root node or if all of its ancestors are expanded.
    const parent = this.getParentNode(node);
    return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
  }
}

const EXAMPLE_DATA: FlatFoodNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 1,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 1,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 1,
  },
  {
    name: 'Vegetables',
    expandable: true,
    level: 0,
  },
  {
    name: 'Green',
    expandable: true,
    level: 1,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 2,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 2,
  },
  {
    name: 'Orange',
    expandable: true,
    level: 1,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 2,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 2,
  },
];
