import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pxInput]',
})
export class PixelInputDirective implements OnInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.applyClassname();
    this.verifyType();
  }

  applyClassname(): void {
    this.renderer.addClass(this.ref.nativeElement, 'px-form-field__input');
  }

  verifyType(): void {
    const type = this.ref.nativeElement.type;
    if (type === 'number') {
      this.implementTypeNumber();
    }
  }

  createSymbolElement(content: '+' | '-'): HTMLButtonElement {
    const btn = this.renderer.createElement('button');
    this.renderer.addClass(btn, 'px-form-field__symbol');
    const symbol = this.renderer.createText(content);
    this.renderer.appendChild(btn, symbol);
    return btn;
  }

  implementTypeNumber(): void {
    const parent = this.renderer.parentNode(this.ref.nativeElement);
    this.renderer.addClass(parent, 'px-form-field__input--number');
    const decrease = this.createSymbolElement('-');
    this.renderer.insertBefore(parent, decrease, this.ref.nativeElement);
    const plus = this.createSymbolElement('+');
    this.renderer.appendChild(parent, plus);
    decrease.onclick = () => this.ref.nativeElement.stepDown();
    plus.onclick = () => this.ref.nativeElement.stepUp();
  }
}
