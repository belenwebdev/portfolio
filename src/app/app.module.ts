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
import { SkillPillComponent } from './sections/skills/skill-pill/skill-pill.component';
import { WorkCardComponent } from './sections/work/work-card/work-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutComponent, SkillsComponent, WorkComponent, ContactComponent, HomeComponent, SkillPillComponent, WorkCardComponent, ComingSoonComponent],
  
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, FontAwesomeModule],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
