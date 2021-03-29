import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'app_registration',
      routerLink: "/register",
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sign In',
      icon: 'login',
      routerLink: '/login',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    // {
    //   label: 'Docs',
    //   icon: 'notes',
    //   showOnMobile: false,
    //   showOnTablet: true,
    //   showOnDesktop: true
    // },
    // {
    //   label: 'Showcase',
    //   icon: 'slideshow',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
    // {
    //   label: 'Blog',
    //   icon: 'rss_feed',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
