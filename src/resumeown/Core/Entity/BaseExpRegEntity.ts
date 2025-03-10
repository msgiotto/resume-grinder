import { ExperienceTypeEnum } from "./ValueObject/ExperienceTypeEnum";
import { ModifierListObject } from "./ValueObject/ModifierListObject";

export class BaseExpRegEntity {
    private type: ExperienceTypeEnum = ExperienceTypeEnum.DEFAULT;
    private description: string = "";
    private modifierList: ModifierListObject;
    
    constructor(type: ExperienceTypeEnum, description: string, modifierList: string[]) {
        this.setType(type);
        this.setDescription(description);
        this.modifierList = new ModifierListObject(modifierList);
    }
    
    public setType(type: ExperienceTypeEnum): void {
        if (type === null) {
            throw new Error('Type cannot be null');
        }
        this.type = type;
    }   

    public getType(): ExperienceTypeEnum {
        return this.type;
    }

    public setDescription(description: string): void {
        if (description === '' || description === null) {
            throw new Error('Description cannot be empty');
        }
        this.description = description;
    }
    
    public getDescription(): string {
        return this.description;
    }

    public addModifierToExp(modifier: string): void {
        if (modifier === '' || modifier === null) {
            throw new Error('Modifier cannot be empty');
        }
        this.modifierList.addModifier(modifier);
    }
    
    public removeModifierFromExp(modifier: string): void {
        if (modifier === '' || modifier === null) {
            throw new Error('Modifier cannot be empty');
        }
        this.modifierList.removeModifier(modifier);
    }
    
    public getModifierList(): string[] {
        return this.modifierList.getModifierArray();
    }
    
}