import {Component, inject, output, signal} from '@angular/core';
import {Tree, TreeItem, TreeItemGroup} from '@angular/aria/tree';
import {NgTemplateOutlet} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {PAGES} from '../../config/pages.config';
import {ThemeService} from '../../services/theme.service';

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
  imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  themeService = inject(ThemeService);
  linkClicked = output<void>();


  readonly nodes: TreeNode[] = [
    {
      name: 'src',
      value: 'inbox',
      icon: 'folder',
      expanded: true,
      disabled: true,
      children: [
        {
          name: PAGES.ABOUT_ME.filename,
          value: PAGES.ABOUT_ME.path,
          icon: PAGES.ABOUT_ME.icon
        },
        {
          name: PAGES.SKILLS.filename,
          value: PAGES.SKILLS.path,
          icon: PAGES.SKILLS.icon
        },
        {
          name: PAGES.EDUCATION.filename,
          value: PAGES.EDUCATION.path,
          icon: PAGES.EDUCATION.icon
        },
        {
          name: PAGES.EXPERIENCE.filename,
          value: PAGES.EXPERIENCE.path,
          icon: PAGES.EXPERIENCE.icon
        },
      ],
    }
  ];
  readonly selected = signal(['inbox']);
}
