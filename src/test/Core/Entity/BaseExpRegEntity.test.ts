import { BaseExpRegEntity } from "../../../resumeown/Core/Entity/BaseExpRegEntity";
import { ExperienceTypeEnum } from "../../../resumeown/Core/Entity/ValueObject/ExperienceTypeEnum";

describe('BaseExpRegEntity', () => {
    it('should initialize with type, description, and modifier list', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', ['modifier1']);
        expect(entity.getType()).toBe(ExperienceTypeEnum.DEFAULT);
        expect(entity.getDescription()).toBe('Test description');
        expect(entity.getModifierList()).toEqual(['modifier1']);
    });

    it('should set and get type', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        entity.setType(ExperienceTypeEnum.PROJECT);
        expect(entity.getType()).toBe(ExperienceTypeEnum.PROJECT);
    });

    it('should throw error when setting null type', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        expect(() => entity.setType(null as any)).toThrow('Type cannot be null');
    });

    it('should set and get description', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        entity.setDescription('New description');
        expect(entity.getDescription()).toBe('New description');
    });

    it('should throw error when setting empty description', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        expect(() => entity.setDescription('')).toThrow('Description cannot be empty');
    });

    it('should throw error when setting null description', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        expect(() => entity.setDescription(null as any)).toThrow('Description cannot be empty');
    });

    it('should add a modifier to the experience', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        entity.addModifierToExp('modifier1');
        expect(entity.getModifierList()).toEqual(['modifier1']);
    });

    it('should throw error when adding an empty modifier', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        expect(() => entity.addModifierToExp('')).toThrow('Modifier cannot be empty');
    });

    it('should throw error when adding a null modifier', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', []);
        expect(() => entity.addModifierToExp(null as any)).toThrow('Modifier cannot be empty');
    });

    it('should remove a modifier from the experience', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', ['modifier1']);
        entity.removeModifierFromExp('modifier1');
        expect(entity.getModifierList()).toEqual([]);
    });

    it('should throw error when removing an empty modifier', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', ['modifier1']);
        expect(() => entity.removeModifierFromExp('')).toThrow('Modifier cannot be empty');
    });

    it('should throw error when removing a null modifier', () => {
        const entity = new BaseExpRegEntity(ExperienceTypeEnum.DEFAULT, 'Test description', ['modifier1']);
        expect(() => entity.removeModifierFromExp(null as any)).toThrow('Modifier cannot be empty');
    });
});