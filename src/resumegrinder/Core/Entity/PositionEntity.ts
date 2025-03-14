export enum locationType {
    REMOTE = 'remote',
    HYBRID = 'hybrid',
    ONSITE = 'on-site'
}

export enum ContractType {
    CONTRACTOR = 'contractor',
    EMPLOYEE = 'employee',
    INTERN = 'intern'
}

export enum EmploymentType {
    FULLTIME = 'full-time',
    PARTTIME = 'part-time',
    TEMPORARY = 'temporary',
    FREELANCE = 'freelance'
}

export class PositionEntity {
    positionId: string;
    title: string;
    startDate: Date;
    endDate: Date;
    overallResponsibilities: string;
    location: string;
    locationType: locationType;
    contractType: ContractType | string;
    employmentType: EmploymentType | string;
    salary?: number;
    benefits?: string;
    reportingTo?: string;
    department?: string;

    constructor(
        positionId: string,
        title: string,
        startDate: Date,
        endDate: Date,
        overallResponsibilities: string,
        location: string,
        locationType: locationType,
        contractType: ContractType | string,
        employmentType: EmploymentType | string,
        salary?: number,
        benefits?: string,
        reportingTo?: string,
        department?: string
    ) {
        this.positionId = positionId;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.overallResponsibilities = overallResponsibilities;
        this.location = location;
        this.locationType = locationType;
        this.contractType = contractType;
        this.employmentType = employmentType;
        this.salary = salary;
        this.benefits = benefits;
        this.reportingTo = reportingTo;
        this.department = department;
    }
}