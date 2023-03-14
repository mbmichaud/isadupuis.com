import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'home' } },
    { path: 'galerie', component: GalleryComponent, data: { animation: 'gallery' } },
    { path: 'a-propos', component: ContentComponent, data: { animation: 'about' } },
    { path: 'nous-joindre', component: ContentComponent, data: { animation: 'contact-us' } },
    { path: '**', component: ContentComponent, data: { animation: 'default' } },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
