import { IMyDateModel } from 'angular-mydatepicker';

export class CreateDisplayRequest {
    distance: string;
    closingTime: any;
    closingPlace: string;
    reportingtime: any;
    vehicleNo: any;
    vehicleStayArea: string;
    createdAt: any;
    display: Display[];
    districtAreaName: String;
    districtName: String;
    generalHourPictureName: String;
    id: 0;
    kilometerPictureName: String;
    reportDate: String;
    status: String;
    updatedAt: String;
}

export class VehicleNo {
    id: number;
    name: string;
}
export class Display {
    displayArea: '';
    displayPictureName: '';
    displayTimingFrom: '';
    displayTimingTo: '';
    peopleViewed: '';
}
