/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { NgModule } from '@angular/core';
import { AppCreateMenuModule } from '../create-menu/create-menu.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@alfresco/adf-core';
import { RouterModule } from '@angular/router';
import { AcaExpansionPanelDirective } from './expansion-panel.directive';

import { IconListTemplateDirective } from './icon-link/icon-list-template.directive';
import { LinkListTemplateDirective } from './link/link-list-template.directive';
import { SidenavListComponent } from './sidenav-list.component';
import { IconLinkItemComponent } from './icon-link/icon-link-item.component';
import { LinkItemComponent } from './link/link-item.component';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forChild(),
    RouterModule,
    AppCreateMenuModule
  ],
  declarations: [
    SidenavComponent,
    AcaExpansionPanelDirective,
    IconListTemplateDirective,
    LinkListTemplateDirective,
    SidenavListComponent,
    IconLinkItemComponent,
    LinkItemComponent
  ],
  exports: [
    SidenavComponent,
    AcaExpansionPanelDirective,
    IconListTemplateDirective,
    LinkListTemplateDirective,
    SidenavListComponent,
    IconLinkItemComponent,
    LinkItemComponent
  ]
})
export class AppSidenavModule {}
