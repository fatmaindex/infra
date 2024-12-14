import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutTheFundComponent } from './components/about-the-fund/about-the-fund.component';
import { NewsComponent } from './components/news/news.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { FooterComponent } from './components/footer/footer.component';
import { TargetedSectorsComponent } from './components/targeted-sectors/targeted-sectors.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
   AppComponent,
   HeaderComponent,
   AboutTheFundComponent,
   TargetedSectorsComponent,
   NewsComponent,
   ObjectivesComponent,
   FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CarouselModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
