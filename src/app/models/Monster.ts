export default class Monster {
    name: string;
    hp: number;
    figureCaption: string;
    attackName: string;
    attactStrength: number;
    attacDescription: string;
    
    constructor(
        name: string,
        hp: number,
        figureCaption: string,
        attackName: string,
        attactStrength: number,
        attacDescription: string
    ) {
        this.name = name;
        this.hp = hp;
        this.figureCaption = figureCaption;
        this.attackName = attackName;
        this.attactStrength = attactStrength;
        this.attacDescription = attacDescription;
    }
  } 