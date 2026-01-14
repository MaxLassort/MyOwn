import {Component, inject, signal} from '@angular/core';
import {Tree, TreeItem, TreeItemGroup} from '@angular/aria/tree';
import {NgTemplateOutlet} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ThemeService} from '../../services/theme.service';
import {RouteEnum} from '../../../route.enum';

type TreeNode = {
  name: string;
  value: string;
  icon: string;
  children?: TreeNode[];
  disabled?: boolean;
  expanded?: boolean;
};

@Component({
  selector: 'app-navigation',
  imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  protected readonly themeService = inject(ThemeService);
  readonly nodes: TreeNode[] = [
    {
      name: 'src',
      value: 'inbox',
      icon: 'folder',
      expanded: true,
      disabled: true,
      children: [
        {name: 'about_me.md', value: 'about-me', icon: 'draft'},
        {name: 'skills.json', value: 'folders/travel', icon: 'draft'},
        {name: 'education.md', value: 'folders/receipts', icon: 'draft'},
        {name: 'experience.js', value: 'folders/work', icon: 'javascript'},
      ],
    }
  ];
  readonly selected = signal(['inbox']);
  protected readonly RouteEnum = RouteEnum;
}
