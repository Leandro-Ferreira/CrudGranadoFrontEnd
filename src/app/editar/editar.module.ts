import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import {FormsModule}from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table'
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    FormsModule,
    ConfirmDialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    MessagesModule,
    InputTextModule,
    FieldsetModule
 ]
})
export class EditarModule { }
