import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DecimalPipe } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { WorkComponent } from './sections/work/work.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutComponent, SkillsComponent, WorkComponent, ContactComponent, HomeComponent],
  
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
