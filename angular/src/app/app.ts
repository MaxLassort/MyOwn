import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  faAngular,
  fab,
  faDocker,
  faGitAlt,
  faHtml5,
  faNodeJs,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {
  faChartLine,
  faCode,
  faCogs, faCubes,
  faDatabase,
  faLaptopCode, faLeaf, faObjectUngroup,
  faPaintBrush,
  faServer,
  faTools
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
class App {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIcons(
      faLaptopCode,
      faServer,
      faDatabase,
      faCode,
      faCogs,
      faTools,
      faGitAlt,
      faPaintBrush,
      faObjectUngroup,
      faChartLine,
      faLeaf,
      faCubes,
      faHtml5,
      faNodeJs,
      faAngular,
      faReact,
      faPhp,
      faDocker
    );
  }
}

export default App
