export class CompanyEntity {
    companyId: string;
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    website?: string;
    industry?: string;
    size?: number;

    constructor(
        companyId: string,
        name: string,
        startDate: Date,
        endDate: Date,
        location: string,
        website?: string,
        industry?: string,
        size?: number
    ) {
        this.companyId = companyId;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.website = website;
        this.industry = industry;
        this.size = size;
    }
}