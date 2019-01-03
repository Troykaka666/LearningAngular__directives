import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //have to make sure the name is same as the selector
  @Input() set appUnless(condition: boolean){
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
