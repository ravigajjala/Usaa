import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MyApp } from './app.component';
import { FoodReportService } from '../services/foodreport.service';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
//import { ReportPage } from '../pages/report/report';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// const appRoutes: Routes = [
//   { path: '/', component: HomePage },
//   { path: 'report/:id', component: ReportPage, data: { title: 'Food Report!' } },
//   { path: '',
//     redirectTo: '/',
//     pathMatch: 'full'
//   },
//   { path: '**', component: HomePage }
// ];


// export const deepLinkConfig: DeepLinkConfig = {
//   links: [
//     { component: HomePage, name: "home", segment: ""},
//     { component: ReportPage, name: "report", segment: "report/:id" }
//   ]
// };
//RouterModule.forRoot(appRoutes)
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FoodReportService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
