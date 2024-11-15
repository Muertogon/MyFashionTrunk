import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <label for="photoInput"> Upload Photo:</label>
      <input
        type="file"
        id="photoInput"
        (change)="onPhotoSelected($event)"
        accept="image/*"
      />
    </div>
    <div *ngIf="imagePreview">
      <img [src]="imagePreview" alt="Photo Preview" width="200" />
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imagePreview: string | null = null;

  onPhotoSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]){
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
