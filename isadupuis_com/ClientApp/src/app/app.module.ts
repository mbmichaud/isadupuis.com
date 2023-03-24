import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContentComponent,
        GalleryComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(routes, {
            //scrollPositionRestoration: 'enabled',
        }),
        ScrollToModule.forRoot(),
        NgxTypedJsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
