import { v4 as uuidv4 } from 'uuid';
import { ContributionEntity } from './ContributionEntity';

export enum LocationTypeEnum {
    REMOTE = 'remote',
    HYBRID = 'hybrid',
    ONSITE = 'on-site'
}

export enum ContractTypeEnum {
    CONTRACTOR = 'contractor',
    EMPLOYEE = 'employee',
    INTERN = 'intern'
}

export enum EmploymentTypeEnum {
    FULLTIME = 'full-time',
    PARTTIME = 'part-time',
    TEMPORARY = 'temporary',
    FREELANCE = 'freelance'
}

export class PositionEntity {
    private id: string;
    private title: string = "";
    private startDate: Date = new Date();
    private endDate?: Date | undefined;
    private isCurrent?: boolean | undefined;
    private location?: string = "";
    private locationType?: LocationTypeEnum | undefined;
    private contractType?: ContractTypeEnum | undefined;
    private employmentType?: EmploymentTypeEnum | undefined;
    private overallResponsibilities?: string = "";
    private reportingTo?: string = "";
    private department?: string = "";
    private contributionList: Array<ContributionEntity> = [];

    constructor (title: string, startDate: Date, isCurrent: boolean, 
                endDate?: Date, location?: string, locationType?: LocationTypeEnum, contractType?: ContractTypeEnum, employmentType?: EmploymentTypeEnum, overallResponsibilities?: string, reportingTo?: string, department?: string) {
        this.id = uuidv4();
        this.setTitle(title);
        this.setStartDate(startDate);
        if (endDate) {
            this.setEndDate(endDate);
        }
        if (isCurrent) {
            this.setCurrent(isCurrent);
        }
        if (location) {
            this.setLocation(location);
        }
        if (locationType) { 
            this.setLocationType(locationType);
        }
        if (contractType) {
            this.setContractType(contractType);
        }
        if (employmentType) {
            this.setEmploymentType(employmentType);
        }
        if (overallResponsibilities) {
            this.setOverallResponsibilities(overallResponsibilities);
        }
        if (reportingTo) {
            this.setReportingTo(reportingTo);
        }
        if (department) {
            this.setDepartment(department);
        }
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        if (title === null || title === '') {
            throw new Error('Title cannot be empty');
        }
        const re = /[^a-zA-Z0-9\s.,:;'"()!?-]/g;
        this.title = title.replace(re, '');
    }

    public getStartDate(): Date | undefined {
        return this.startDate;
    }

    public setStartDate(startDate: Date): void {
        if (startDate === null) {
            throw new Error('Start Date cannot be null');
        }
        if (startDate > new Date()) {
            throw new Error('Start Date cannot be in the future');
        }
        if (this.endDate && startDate > this.endDate) {
            throw new Error('Start Date cannot be after End Date');
        }
        this.startDate = startDate;
    }

    public getEndDate(): Date | undefined {
        return this.endDate;
    }

    public setEndDate(endDate: Date | null): void {
        if (endDate === null) {
            this.endDate = undefined;
            return;
        }
        if (endDate > new Date()) {
            throw new Error('End Date cannot be in the future');
        }
        if (endDate < this.startDate) {
            throw new Error('End Date cannot be before Start Date');
        }
        this.endDate = endDate;
        this.isCurrent = false;
    }

    public setCurrent(isCurrent: boolean): void {
        if (isCurrent === null) {
            throw new Error('Current cannot be null');
        }
        if (isCurrent && this.endDate) {
            throw new Error('Cannot set position as current if there is an end date');
        }
        this.isCurrent = isCurrent;
    }

    public getCurrent(): boolean | undefined {
        if (this.isCurrent) {
        return this.isCurrent;
        }   
    }

    public getLocation(): string | undefined {
        return this.location;
    }

    public setLocation(location: string): void {
        if (location === null) {
            throw new Error('Location cannot be null');
        }
        const re = /[^a-zA-Z0-9\s.,:;'"()!?-]/g;
        this.location = location.replace(re, '');
    }

    public getLocationType(): LocationTypeEnum | undefined {
        return this.locationType;
    }

    public setLocationType(locationType: LocationTypeEnum): void {
        if (locationType === null) {
            throw new Error('Location Type cannot be null');
        }
        this.locationType = locationType;
    }

    public getContractType(): ContractTypeEnum | undefined {
        return this.contractType;
    }

    public setContractType(contractType: ContractTypeEnum): void {
        if (contractType === null) {
            throw new Error('Contract Type cannot be null');
        }
        this.contractType = contractType;
    }

    public getEmploymentType(): EmploymentTypeEnum | undefined {
        return this.employmentType;
    }

    public setEmploymentType(employmentType: EmploymentTypeEnum): void {
        if (employmentType === null) {
            throw new Error('Employment Type cannot be null');
        }
        this.employmentType = employmentType;
    }

    public getOverallResponsibilities(): string | undefined {
        return this.overallResponsibilities;
    }

    public setOverallResponsibilities(overallResponsibilities: string): void {
        if (overallResponsibilities === null) {
            throw new Error('Overall Responsibilities cannot be null');
        }
        const re = /[^a-zA-Z0-9\s.,:;'"()!?-]/g;
        this.overallResponsibilities = overallResponsibilities.replace(re, '');
    }

    public getReportingTo(): string | undefined {
        return this.reportingTo;
    }

    public setReportingTo(reportingTo: string): void {
        if (reportingTo === null) {
            throw new Error('Reporting To cannot be null');
        }
        const re = /[^a-zA-Z0-9\s.,:;'"()!?-]/g;
        this.reportingTo = reportingTo.replace(re, '');
    }

    public getDepartment(): string | undefined {
        return this.department;
    }

    public setDepartment(department: string): void {
        if (department === null) {
            throw new Error('Department cannot be null');
        }
        const re = /[^a-zA-Z0-9\s.,:;'"()!?-]/g;
        this.department = department.replace(re, '');
    }

    public getDuration(): string {
        if (this.isCurrent) {
            return 'Present';
        }
        if (this.endDate) {
            return `${this.startDate.toLocaleDateString()} - ${this.endDate.toLocaleDateString()}`;
        }
        return `${this.startDate.toLocaleDateString()} - Present`;
    }

    public getDurationInMonths(): number {
        if (this.isCurrent) {
            return 0;
        }
        if (this.endDate) {
            return (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12 + (this.endDate.getMonth() - this.startDate.getMonth());
        }
        return (new Date().getFullYear() - this.startDate.getFullYear()) * 12 + (new Date().getMonth() - this.startDate.getMonth());
    }

    public addContribution(contribution: ContributionEntity): void {
        if (contribution === null) {
            throw new Error('Contribution cannot be null');
        }
        this.contributionList.push(contribution);
    }

}