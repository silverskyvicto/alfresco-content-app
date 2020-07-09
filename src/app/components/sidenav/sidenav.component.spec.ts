/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2020 Alfresco Software Limited
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

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { AppTestingModule } from '../../testing/app-testing.module';
import { AppExtensionService } from '@alfresco/aca-shared';

describe('SidenavComponent', () => {
  let fixture: ComponentFixture<SidenavComponent>;
  let component: SidenavComponent;
  let extensionService: AppExtensionService;
  const navbarMock: any = [
    {
      items: [
        {
          route: 'route'
        }
      ]
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      providers: [AppExtensionService],
      declarations: [SidenavComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SidenavComponent);
        component = fixture.componentInstance;
        extensionService = TestBed.inject(AppExtensionService);

        extensionService.navbar = navbarMock;

        fixture.detectChanges();
      });
  }));

  it('should set the sidenav data', async(() => {
    expect(component.groups).toEqual([
      {
        items: [
          {
            route: 'route',
            url: '/route'
          }
        ]
      } as any
    ]);
  }));
});
