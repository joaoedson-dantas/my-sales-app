import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {
  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  public categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required]
  })

  onSubmit() {
    console.log('Submit', this.categoryForm.value)
    this.save.emit(this.categoryForm.value)
  }

  onBack() {
    this.back.emit();
  }

}
