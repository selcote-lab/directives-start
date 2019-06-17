import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";
import { notImplemented } from "@angular/core/src/render3/util";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") hightlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "blue"
    );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseenter(evenData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.defaultColor;
  }
  @HostListener("mouseleave") mouseleave(evenData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.hightlightColor;
  }
}
