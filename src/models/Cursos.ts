class Cursos {
  public stressScore: number = 0;
  constructor(private score: number) { }

  getScore(): number {
    return this.score;
  }

  /**
   * Nivel de estres
   * @param _stressScore nivel de estres coloque un valor de 1 al 10
   */
  setStress(_stressScore: number) {
    this.stressScore = _stressScore;
  }
}
