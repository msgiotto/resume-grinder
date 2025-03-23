import { PositionEntity, LocationTypeEnum, ContractTypeEnum, EmploymentTypeEnum } from "../../../resumegrinder/Core/Entity/PositionEntity";

describe('PositionEntity', () => {

    it('should create a new PositionEntity', () => {
        const position = new PositionEntity('Software Engineering Manager', new Date(2015, 1), false, new Date(2015, 7), 'São Paulo - SP', LocationTypeEnum.REMOTE, ContractTypeEnum.EMPLOYEE, EmploymentTypeEnum.FULLTIME, 'Responsabilities Text', 'CTO', 'Engineering');        
        expect(position).toBeInstanceOf(PositionEntity);
    });



});