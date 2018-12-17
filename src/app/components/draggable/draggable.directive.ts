import {
  Directive,
  HostListener,
  EventEmitter,
  Output
} from "@angular/core";

@Directive({
  selector: "[appDraggable]"
})
export class DraggableDirective {
 
  @Output() dragged = new EventEmitter<number>();
  @Output() customDragStart = new EventEmitter<void>();
  
  @HostListener("dragstart")
  onDragStart(): void {
    console.log("start");
    this.customDragStart.emit();
  }
  @HostListener("dragend", ["$event"])
  onDragEnd(event: DragEvent): void {
    this.dragged.emit(event.y);
  }

  constructor() {}
}
