import { ModifierListObject } from "../../../../resumeown/Core/Entity/ValueObject/ModifierListObject";

describe('ModifierListObject', () => {
    it('should initialize with a list of modifiers', () => {
        const modifiers = ['modifier1', 'modifier2'];
        const modifierListObject = new ModifierListObject(modifiers);
        expect(modifierListObject.getModifierArray()).toEqual(['modifier1', 'modifier2']);
    });

    it('should add a new modifier', () => {
        const modifierListObject = new ModifierListObject([]);
        modifierListObject.addModifier('modifier1');
        expect(modifierListObject.getModifierArray()).toEqual(['modifier1']);
    });

    it('should not add an empty modifier', () => {
        const modifierListObject = new ModifierListObject([]);
        expect(() => modifierListObject.addModifier('')).toThrow('Modifier cannot be empty');
    });

    it('should not add a null modifier', () => {
        const modifierListObject = new ModifierListObject([]);
        expect(() => modifierListObject.addModifier(null as any)).toThrow('Modifier cannot be empty');
    });

    it('should remove a modifier', () => {
        const modifiers = ['modifier1', 'modifier2'];
        const modifierListObject = new ModifierListObject(modifiers);
        modifierListObject.removeModifier('modifier1');
        expect(modifierListObject.getModifierArray()).toEqual(['modifier2']);
    });

    it('should not remove an empty modifier', () => {
        const modifierListObject = new ModifierListObject(['modifier1']);
        expect(() => modifierListObject.removeModifier('')).toThrow('Modifier cannot be empty');
    });

    it('should not remove a null modifier', () => {
        const modifierListObject = new ModifierListObject(['modifier1']);
        expect(() => modifierListObject.removeModifier(null as any)).toThrow('Modifier cannot be empty');
    });

    it('should not add duplicate modifiers', () => {
        const modifierListObject = new ModifierListObject(['modifier1']);
        modifierListObject.addModifier('modifier1');
        expect(modifierListObject.getModifierArray()).toEqual(['modifier1']);
    });

    it('should normalize modifiers by removing # and converting to lowercase', () => {
        const modifierListObject = new ModifierListObject([]);
        modifierListObject.addModifier('#MODIFIER1');
        expect(modifierListObject.getModifierArray()).toEqual(['modifier1']);
    });
});