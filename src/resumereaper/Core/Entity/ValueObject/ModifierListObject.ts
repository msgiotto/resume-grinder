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
        const re_multiple = /[\s\n]/g;
        if (modifier.match(re_multiple)) {
            throw new Error('Multiple words are not allowed in the modifier');
        }
        const re_replacement = /[^a-zA-Z0-9-]/g;
        modifier = modifier.replace(re_replacement, '').toLowerCase();
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
