import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Chart from 'chart.js/auto';

export default class ReportPageWebPart extends BaseClientSideWebPart<{}> {
  public render(): void {
    this.domElement.innerHTML = `
      <div style="padding: 20px;">
        <h2>Training Reports</h2>
        <canvas id="trainingChart" width="400" height="200"></canvas>
      </div>
    `;

    this.renderChart();
  }

  private renderChart(): void {
    const canvas = this.domElement.querySelector('#trainingChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    } 

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Course A', 'Course B', 'Course C'],
        datasets: [
          {
            label: 'Participants',
            data: [12, 19, 3],
            backgroundColor: ['red', 'blue', 'green'],
          },
        ],
      },
    });
  }
}

