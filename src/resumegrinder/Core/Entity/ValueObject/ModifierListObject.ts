export class ModifierListObject {

    private modifierList: string[] = [];

    constructor(modifierList: string[]) {
        for (let modifier of modifierList) {
            this.addModifier(modifier);
        }
    }

    public addModifier(modifier: string): void {
        if (modifier === '' || modifier === null) {
            throw new Error('Modifier cannot be empty');
        }
        modifier = modifier.replace(/#/g, '').toLowerCase();
        if (!this.modifierList.includes(modifier)) {
            this.modifierList.push(modifier);
        }
    }

    public removeModifier(modifier: string): void {
        if (modifier === '' || modifier === null) {
            throw new Error('Modifier cannot be empty');
        }
        this.modifierList = this.modifierList.filter((item) => item !== modifier);
    }
    
    public getModifierArray(): string[] {
        return this.modifierList;
    }

}
