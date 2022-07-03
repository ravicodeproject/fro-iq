import { Injectable } from '@angular/core';
import { default as emailTemplate } from '../formly-widget/topics.formly.json';

export enum WidgetName {
  EMAIL = "email"
}

const widgets = {
  [WidgetName.EMAIL]: emailTemplate
}

/**
 * @interface WidgetDictionary
 */
interface WidgetDictionary {
  [key: string]: any;
}
/**
 * The widget service manages the current generated widgets.
 */
@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  private _widgets: WidgetDictionary = {
    ...widgets
  }

  public get(typeName: WidgetName): any {
    const widget = this._widgets[typeName];
    if (widget === undefined) {
      console.error('Invalid Widget Name', typeName);
    }
    return widget;
  }
}
