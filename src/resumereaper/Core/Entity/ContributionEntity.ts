import { v4 as uuidv4 } from 'uuid';
import { ModifierListObject } from "./ValueObject/ModifierListObject";

export enum ContributionTypeEnum {
    DEFAULT = "CONTRIBUTION",
    PROJECT = "PROJECT",
    ACHIEVEMENT = "ACHIEVEMENT",
    ACCOMPLISHMENT = "ACCOMPLISHMENT",
    TASK = "TASK",
    RESPONSABILITY = "RESPONSABILITY",
    HIGHLIGHT = "HIGHLIGHT"
    // Add more types here when extending the Contribution class
    // e.g. CONTRIBUTION_TYPE = "CONTRIBUTION_TYPE"
  }

export class ContributionEntity {
    private id: string;
    private type: ContributionTypeEnum = ContributionTypeEnum.DEFAULT;
    private description: string = "";
    private modifierList: ModifierListObject;

    
    constructor(type: ContributionTypeEnum, description: string, modifierList: string[]) {
        this.id = uuidv4();
        this.setType(type);
        this.setDescription(description);
        this.modifierList = new ModifierListObject(modifierList);
    }
    
    public setType(type: ContributionTypeEnum): void {
        if (type === null) {
            throw new Error('Contribution Type cannot be null');
        }
        this.type = type;
    }   

    public getType(): ContributionTypeEnum {
        return this.type;
    }

    public setDescription(description: string): void {
        if (description === '' || description === null) {
            throw new Error('Contribution description cannot be empty');
        }
        const re = /[^a-zA-Z0-9\s.,:;'"()!?-]/g;
        this.description = description.replace(re, '');
    }
    
    public getDescription(): string {
        return this.description;
    }

    public addModifierToExp(modifier: string): void {
        if (modifier === '' || modifier === null) {
            throw new Error('Contribution Modifier cannot be empty');
        }
        this.modifierList.addModifier(modifier);
    }
    
    public removeModifierFromExp(modifier: string): void {
        if (modifier === '' || modifier === null) {
            throw new Error('Contribution Modifier cannot be empty');
        }
        this.modifierList.removeModifier(modifier);
    }
    
    public getModifierList(): string[] {
        return this.modifierList.getModifierArray();
    }

    public getId(): string {
        return this.id;
    }
    
}