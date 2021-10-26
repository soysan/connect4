const config = {
  target: document.getElementById("target"),
};

class Model {
  public row: string[];
  public state: string[][];

  constructor() {
    this.row = ["", "", "", "", "", "", ""];
    this.state = this.generateField();
  }

  private generateField(): string[][] {
    let resArr = [];
    for (let i = 0; i < 6; i++) {
      let currArr = this.row.slice();
      resArr.push(currArr);
    }

    return resArr;
  }

  private evaluateField(): boolean {
    const vertical: boolean = this.checkVertical();
    const horizontal: boolean = this.checkHorizontal();
    const cross: boolean = this.checkCross();

    return vertical || horizontal || cross;
  }

  private checkVertical(): boolean {
    return true;
  }

  private checkHorizontal(): boolean {
    return true;
  }

  private checkCross(): boolean {
    return this.crossUp() || this.crossDown();
  }

  private crossUp(): boolean {
    return true;
  }

  private crossDown(): boolean {
    return true;
  }
}

class View {
  static initialPage() {
    const target = config.target!;
    let container: HTMLDivElement = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
    <div class="title">
      <h1>Connect 4</h1>
      <div class="players">
        <h3 class="user">Player</h3>
        <h3 class="opponent">Opponent</h3>
      </div>
    </div>
    <div id="game-board"></div>
    `;
    target.appendChild(container);
  };

  static showField(state: Model) {
    
  }
}

class Controller {
  static startGame() {
    const state = new Model();
    console.log(state);
    View.initialPage();
  }
}

Controller.startGame();
